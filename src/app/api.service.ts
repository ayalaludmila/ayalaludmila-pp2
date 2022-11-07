import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };

  constructor( public http: HttpClient ) 
  {  
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Origin','*');
  }

  agregarProductos(data){
    return this.http.post('http://localhost/pp2_crud/crearProducto.php',data);// 
    //return this.http.post('https://16c1-186-124-61-158.sa.ngrok.io/pp2_crud/crearProducto.php',data);
    
  }

  obtenerProductos(){
     return this.http.get('http://localhost/pp2_crud/leerProducto.php');
     //return this.http.get('https://16c1-186-124-61-158.sa.ngrok.io/pp2_crud/leerProducto.php', this.requestOptions);
  }

}
