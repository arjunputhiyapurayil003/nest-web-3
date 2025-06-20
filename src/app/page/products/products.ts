import { Component } from '@angular/core';
import { ApiServices } from '../../apiservices';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {products:any[]=[];constructor (private ApiService:ApiServices){}
ngoninit() {
  this.ApiService.getproduct().subscribe((data:any)=>{
    this.products = data;
  console.log(data);
});
}

}
