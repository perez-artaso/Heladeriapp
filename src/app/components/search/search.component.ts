import { Component, OnInit } from '@angular/core';
import { ParsingService } from 'src/app/services/parsing.service';
import { RequestingService } from 'src/app/services/requesting.service';
import { Helado } from 'src/app/classes/helado';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  helados: Array<Helado>;
  heladoEncontrado: Helado;
  encontrado: boolean;
  noStock: boolean;
  doesNotExist: boolean;

  constructor(private requester: RequestingService, private parser: ParsingService) {
    this.helados = new Array<Helado>();
    this.resetFlags();
  }

  ngOnInit() {
    this.requester.ReadItems().subscribe(
      (heladosRecibidos: Array<Helado>) => {
        this.helados = this.parser.Parse(heladosRecibidos);
      }
    );
  }

  search(sabor: string) {
    this.resetFlags();
    let found = 0;
    this.helados.forEach(
      (helado: Helado) => {
        if (helado.sabor === sabor) {
          if (helado.kilos > 0) {
            found = 1;
            this.encontrado = true;
            this.heladoEncontrado = helado;
          } else {
            found = 1;
            this.noStock = true;
            this.heladoEncontrado = helado;
          }
        }
      }
    );
    if (found === 0) { this.doesNotExist = true; }
  }

  resetFlags() {
    this.encontrado = false;
    this.noStock = false;
    this.doesNotExist = false;
  }

}
