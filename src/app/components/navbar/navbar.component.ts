import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<mat-toolbar color="primary" class="navbar">
                <a [routerLink]="['/']"><span>Andina Store</span></a>                
                <div class="menu">
                  <a [routerLink]="['/productos']">Productos</a> 
                  <a [routerLink]="['/crear-producto']">Crear Producto</a> 
                </div>
            </mat-toolbar>

`,
  styleUrls: ['./navbar.component.css']
})
/* export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  0
  }

} */
export class NavbarComponent {
  
}
