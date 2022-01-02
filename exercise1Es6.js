"use strict"
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price -=this.price * 0.25;   
    }
}
let product1 = new Product('TV', 300);
product1.make25PercentDiscount();
console.log(product1);