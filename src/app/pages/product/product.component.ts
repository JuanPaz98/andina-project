import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    btnDisabled = true;
    products = new Array();
    product ={
        name: ' producto-ramdom', 
        price: 0, 
        quantity: 0, 
        observations: " ",
        image: "imgggg"
    }

    togglear(){
        this.btnDisabled = !this.btnDisabled
    }
    sumarPrecio(){
        this.product.price += 10
    }

    saveProduct(){
        this.product.name = this.product.name
        this.products.push(this.product)
        console.log(this.products)
    }

}
