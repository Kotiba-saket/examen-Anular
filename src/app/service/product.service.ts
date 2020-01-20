import { Product } from './product';
import { Component, OnInit } from '@angular/core';

export class ProductService {
    product =  [
      {
         name: "product 1 name",
         brand: "product 1 prand",
         description: "product 1 description",
         price: 1,
      },
      {
         name: "product 1 name",
         brand: "product 1 prand",
         description: "product 1 description",
         price: 2,
      }
   ]
   constructor() { }
   getAllProducts() {
      return this.product;
   }

}
