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

  constructor(private fb: FormBuilder,service:WalletService) {
    this.bankAccountForm = this.fb.group({
      accountHolderName: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      ifscCode: ['', Validators.required],
      branchName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bankAccountForm.valid) {
      console.log('Form Submitted!', this.bankAccountForm.value);
    }
  }
}
