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

  public initialInvestmentSignal = output<string>();
  public annualInvestmentSignal = output<string>();
  public expectedReturnSignal = output<string>();
  public durationSignal = output<string>();

  public onInitialInvestmentChange() {
    this.initialInvestmentSignal.emit(this.initialInvestmentInput);
  }
  public annualInvestmentChange() {
    this.annualInvestmentSignal.emit(this.annualInvestmentInput);
  }
  public expectedReturnChange() {
    this.expectedReturnSignal.emit(this.expectedReturnInput);
  }
  public durationChange() {
    this.durationSignal.emit(this.durationInput);
  }
}
