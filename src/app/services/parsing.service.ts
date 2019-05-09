import { Injectable } from '@angular/core';
import { Helado } from '../classes/helado';

@Injectable({
  providedIn: 'root'
})
export class ParsingService {

  constructor() { }

  Parse(itemArray: Array<Helado>) {
    const returnArray = new Array<Helado>();
    itemArray.forEach((helado) => {
      returnArray.push(new Helado(helado.id, helado.sabor, helado.tipo, helado.kilos, helado.foto));
    });

    return returnArray;
  }
}
