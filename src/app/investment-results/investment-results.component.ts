import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.scss'],
})
export class InvestmentResultsComponent {
  public years = input<number>(5);
  public initialInvestment = input<number>(0);
  public annualInvestment = input<number>(0);
  public expectedReturn = input<number>(0);

  private calculateInterestForTheInvestmentYear(year: number): number {
    return (
      ((this.initialInvestment() * (1 + this.expectedReturn() / 100)) ^ year) -
      this.initialInvestment()
    );
  }

  private calculateInvestmentValueForYear(year: number): number {
    return (
      (this.initialInvestment() * (1 + this.expectedReturn() / 100)) ^ year
    );
  }

  private calculateTotalInterestForYear(year: number): number {
    return this.initialInvestment() * (this.expectedReturn() / 100) * year;
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
    for (let index: number = 1; index <= +this.years(); index++) {
      investmentReturnsDataArray.push({
        year: index,
        interest: this.calculateInterestForTheInvestmentYear(index),
        investmentValue: this.calculateInvestmentValueForYear(index),
        totalInterest: this.calculateTotalInterestForYear(index),
        investedCapital: this.calculateInvestedCapitalForYear(index),
      });
    }
    return investmentReturnsDataArray;
  }
}
