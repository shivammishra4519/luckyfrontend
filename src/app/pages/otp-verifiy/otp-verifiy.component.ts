import { Component } from '@angular/core';
import { WalletService } from '../../service/wallet.service';

@Component({
  selector: 'app-otp-verifiy',
  templateUrl: './otp-verifiy.component.html',
  styleUrl: './otp-verifiy.component.css'
})
export class OtpVerifiyComponent {
  constructor(private service:WalletService){}
  otp: string[] = ['', '', '', ''];
  timeLeft: number = 30;
  timer: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onInputChange(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (value.length > 1) {
      input.value = value.slice(0, 1);
    }

    if (value) {
      if (index < this.otp.length - 1) {
        const nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else {
      if (index > 0) {
        const prevInput = input.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }

    this.otp[index] = input.value;
  }

  isOtpComplete(): boolean {
    return this.otp.every(digit => digit !== '');
  }

  verifyOtp() {
    const otpValue = this.otp.join('');
    console.log('Entered OTP:', otpValue);
    this.service.verfiyOtp({otp:otpValue}).subscribe({
      next:data=>{
        console.log(data)
      },
      error:err=>{
        console.log(err)
      }
    })
   
  }

  resendOtp() {
    console.log('Resend OTP');
    // Add your resend OTP logic here
    this.otp = ['', '', '', ''];
    this.timeLeft = 30;
    this.startTimer();
  }
}
