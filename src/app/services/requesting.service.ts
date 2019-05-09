import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestingService {

  baseUrl = 'http://localhost/heladeriapp';

  constructor(private http: HttpClient) { }

  CreateItem(sabor, tipo, kilos) {
    return this.http.post(this.baseUrl + '/createIceCream', {
      sabor: sabor,
      tipo: tipo,
      kilos: kilos
    });
  }

  ReadItems() {
    return this.http.get(this.baseUrl + '/readIceCreams');
  }

  UpdateItem(id, sabor, tipo, kilos) {
    return this.http.post(this.baseUrl + '/updateIceCream', {
      id: id,
      sabor: sabor,
      tipo: tipo,
      kilos: kilos
    });
  }

  DeleteItem(id) {
    return this.http.post(this.baseUrl + '/deleteIceCream', {
      id: id
    });
  }
}
