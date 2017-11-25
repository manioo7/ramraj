import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'app mani!';
  public clickMessage  = '';

	public onClickMe(){
	  this.clickMessage  ="I am here ";
	}
}

