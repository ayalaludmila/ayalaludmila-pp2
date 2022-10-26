/*
import { Injectable } from '@angular/core';
//import { SQLitePorterOriginal } from '@awesome-cordova-plugins/sqlite-porter';
import { Platform } from '@ionic/angular';
//import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  products = new BehaviorSubject([]);

  constructor(
    private plt: Platform,
    //private sqlitePorter: SQLitePorterOriginal,
    private sqlite: SQLite,
    private http: HttpClientModule
  ) { }

  getDatabaseState(){
    return this.dbReady.asObservable();
  }

  getProducts():Observable<any[]>{
    return this.products.asObservable();
  }

}
*/
