import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ot',
  templateUrl: './ot.component.html',
  styleUrls: ['./ot.component.css']
})
export class otComponent {


constructor (private router: Router) {} 

volver(){
  this.router.navigate(['/home-logged']);
}

}
