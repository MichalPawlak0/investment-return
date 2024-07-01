import { Component } from '@angular/core';
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
}
