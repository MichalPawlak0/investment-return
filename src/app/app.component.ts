import { Component, input } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [InvestmentResultsComponent, UserInputComponent, HeaderComponent],
})
export class AppComponent {
  title = 'investment-return';
  public years: number = 1;
  public initialInvestment: number = 10000;
  public annualInvestment: number = 1000;
  public expectedReturn: number = 5;

  public onDurationChange(duration: number) {
    this.years = duration;
  }
  public onInitialInvestmentChange(initialInvestment: number) {
    this.initialInvestment = initialInvestment;
  }
  public onAnnualInvestmentChange(annualInvestment: number) {
    this.annualInvestment = annualInvestment;
  }
  public onExpectedReturnChange(expectedReturn: number) {
    this.expectedReturn = expectedReturn;
  }
}
