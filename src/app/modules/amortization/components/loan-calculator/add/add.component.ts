import { Component, OnInit,Output,  EventEmitter } from '@angular/core';
import {LoanData} from '../../../../../../apex/enitites/loanData.entity';
import {DisplayLoan} from '../../../../../../apex/enitites/displayLoan.entity';
import {MonthlyEmis} from '../../../../../../apex/enitites/monthlyEmis.entity';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  loanData : LoanData = new LoanData();
  @Output() addDetails = new EventEmitter<any>();
  @Output() resetDetails = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    // this.calculate();
  }
  // calculate(){
  //   this.monthlyEmis = []
  //   let rate:any = this.loanData.annualInterestRate/100;
  //   let monthly = rate/12;
  //   let payment = ( (this.loanData.amt* monthly)/(1-Math.pow((1+monthly), -this.loanData.months)) );
  //   let totalAmt =  payment*this.loanData.months;
  //   let interestAmt = totalAmt - this.loanData.amt;

    
  //   this.displayLoan.loanAmt= this.loanData.amt,
  //   this.displayLoan.noOfEmi = this.loanData.months,
  //   this.displayLoan.annualInterestRate= rate,
  //   this.displayLoan.monthlyInterestRate= monthly,
  //   this.displayLoan.monthlyEmiPayment= payment,
  //   this.displayLoan.totalAmt= totalAmt,
  //   this.displayLoan.interestAmt= interestAmt
    
  //   let i = 1;
  //   let balanceAmt:any = this.displayLoan.loanAmt;
  //   let newInterset = 0;
  //   let newPrinciple = 0;
  //   console.log(this.loanData.months);
  //   if(this.loanData.months > 0){
  //       while(i <= this.loanData.months){
  //           newInterset = this.displayLoan.monthlyInterestRate * balanceAmt;
  //           newPrinciple = payment - newInterset;
  //           balanceAmt = balanceAmt - newPrinciple;
  //           let emi = {
  //               period: i,
  //               monthEmi: this.displayLoan.monthlyEmiPayment,
  //               interestAmt: newInterset,
  //               pricipleAmt: newPrinciple,
  //               balanceAmt: balanceAmt
  //           };
  //           this.monthlyEmis.push(emi);
  //           i++;
  //       }
  //   }

  //   console.log(this.displayLoan);
  //   console.log(this.monthlyEmis);
  //   this.displayLoanDetails.emit(this.displayLoan);
  //   this.monthlyEmisList.emit(this.monthlyEmis);
  // }
  addLoanDetails(){
    this.addDetails.emit(this.loanData);
  }
  resetLoanDetails(){
    this.loanData = new LoanData();
    this.resetDetails.emit(this.loanData);
  }
}
