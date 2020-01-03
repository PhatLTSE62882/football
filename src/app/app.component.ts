import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football';
  show=false;
  showLanguage(show)
  {
    this.show=!show;
    console.log(this.show);
    if(this.show===false)
    {
      var getDiv = document.getElementById("languagelist");
      getDiv.style.display = "inline-block";
    }else
    {
      var getDiv = document.getElementById("languagelist");
      getDiv.style.display = "none";
    }
   
  }
  blockLanguage()
  {

    console.log("a");
   
  }
}
