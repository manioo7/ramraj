import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'app mani!';
  public clickMessage  = '';
 public names = [];
	public onClickMe(){
	  this.clickMessage  ="I am here ";
	 
   this.names = ['Angular2', 'Name2', 'name3'];
 
	} 
    
}

