import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app mani!';
clickMessage  = 'aasdas';

	onclickMe(){
	this.clickMessage  ="I am here ";

	}
}

