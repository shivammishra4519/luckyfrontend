import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WalletService } from '../../service/wallet.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrl: './add-bank.component.css'
})
export class AddBankComponent {
  bankAccountForm: FormGroup;
  isNUmberVerifyed = true;

  AllBank: any;
  constructor(private fb: FormBuilder, private service: WalletService) {
    this.bankAccountForm = this.fb.group({
      accountHolderName: ['', Validators.required],
      originalifsccode: ['0', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      ifscCode: ['', Validators.required],
      branchName: ['', Validators.required],
      bankName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getAllBank().subscribe({
      next: data => {
        this.AllBank = data;
        console.log(data);
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  onSubmit(): void {
    this.service.verifyNumber().subscribe({
      next: data => {

        if (!data) {

          this.service.registerRemitter().subscribe({
            next: data => {
              console.log(data)
            },
            error: err => {
              console.log(err)
            }
          })
          this.isNUmberVerifyed = false
        }
        else{
          
        }
      }
    }
    )
   
    const ifscCode=this.bankAccountForm.value.originalifsccode;
          const obj=this.filterBanksByIFSC(ifscCode);
          this.bankAccountForm.patchValue({
            bankName:obj.bank_name
          })
          this.service.addBankAccount(this.bankAccountForm.value).subscribe({
            next:data=>{
              alert('Account Added');
              this.bankAccountForm.reset();
            },
            error:err=>{
              console.log(err)
            }
          })

  
  }
  filterBanksByIFSC(ifscCode: string) {
    return this.AllBank.find((bank: any) => bank.branch_ifsc === ifscCode);
  }

}
