import { Component } from '@angular/core';

//decorator below
@Component({
  moduleId: module.id,
  selector: 'bs-app',
  templateUrl:"app.component.html"
})
export class AppComponent  {
  pageTitle: string = "Nick Book Store"
  searchBox: string = "";
}
