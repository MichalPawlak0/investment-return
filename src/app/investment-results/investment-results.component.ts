import { DecimalPipe, registerLocaleData } from '@angular/common';
import { Component, input } from '@angular/core';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');

@Component({
  selector: 'app-investment-results',
  imports: [DecimalPipe],
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.scss'],
})
export class InvestmentResultsComponent {
  public years = input<number>(100);
  public initialInvestment = input<number>(10000);
  public annualInvestment = input<number>(10000);
  public expectedReturn = input<number>(10);

  private calculateInterestForTheInvestmentYear(
    investmentValue: number
  ): number {
    return investmentValue * (this.expectedReturn() / 100);
  }

  private calculateTotalInterestForYear(
    year: number,
    investmentValue: number
  ): number {
    return (
      investmentValue -
      this.annualInvestment() * year -
      this.initialInvestment()
    );
  }

  private calculateInvestedCapitalForYear(year: number): number {
    return this.initialInvestment() + year * this.annualInvestment();
  }

  public calculatedReturns(): Array<{
    year: number;
    interest: number;
    investmentValue: number;
    totalInterest: number;
    investedCapital: number;
  }> {
    let investmentReturnsDataArray: Array<{
      year: number;
      interest: number;
      investmentValue: number;
      totalInterest: number;
      investedCapital: number;
    }> = [];
    let investmentValue: number = this.initialInvestment();

    for (let index: number = 1; index <= this.years(); index++) {
      const interestEarnedInTheYear: number =
        this.calculateInterestForTheInvestmentYear(investmentValue);
      investmentValue += interestEarnedInTheYear + this.annualInvestment();

      investmentReturnsDataArray.push({
        year: index,
        interest: interestEarnedInTheYear,
        investmentValue: investmentValue,
        totalInterest: this.calculateTotalInterestForYear(
          index,
          investmentValue
        ),
        investedCapital: this.calculateInvestedCapitalForYear(index),
      });
    }
    return investmentReturnsDataArray;
  }
}
