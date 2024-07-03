import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  public initialInvestmentInput: string = '';
  public annualInvestmentInput: string = '';
  public expectedReturnInput: string = '';
  public durationInput: string = '';

  public initialInvestmentSignal = output<number>();
  public annualInvestmentSignal = output<number>();
  public expectedReturnSignal = output<number>();
  public durationSignal = output<number>();

  public onInitialInvestmentChange(): void {
    this.initialInvestmentSignal.emit(+this.initialInvestmentInput);
  }
  public onAnnualInvestmentChange(): void {
    this.annualInvestmentSignal.emit(+this.annualInvestmentInput);
  }
  public onExpectedReturnChange(): void {
    this.expectedReturnSignal.emit(+this.expectedReturnInput);
  }
  public onDurationChange(): void {
    this.durationSignal.emit(+this.durationInput);
  }
}
