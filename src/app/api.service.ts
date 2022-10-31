import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders

  constructor( public http: HttpClient ) 
  {  
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
  }

  agregarProductos(data){
    return this.http.post('http://localhost/pp2_crud/crearProducto.php',data);
  }

  obtenerProductos(){
     return this.http.get('http://localhost/pp2_crud/leerProducto.php')
  }

}
