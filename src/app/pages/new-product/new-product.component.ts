import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  model= {
    name: 'play 5', 
    
  }
  cities= [
    {
        "id": 1, 
        name: "cali"
    },
    {
        "id": 2, 
        name: "medellin"
    },
    {
        "id": 3, 
        name: "bogota"
    },
    {
        "id": 4, 
        name: "pereira"
    },
    {
        "id": 5, 
        name: "barranquilla"
    },
    {
        "id": 6, 
        name: "pasto"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
