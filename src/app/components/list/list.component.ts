import { Component, OnInit } from '@angular/core';
import { Helado } from 'src/app/classes/helado';
import { RequestingService } from 'src/app/services/requesting.service';
import { ParsingService } from 'src/app/services/parsing.service';
declare const $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  helados: Array<Helado>;
  selectedId: number;

  constructor(private requester: RequestingService, private parser: ParsingService) {
    this.helados = new Array<Helado>();
   }

  ngOnInit() {
    this.requester.ReadItems().subscribe((Helados: Array<Helado>) => {
      this.helados = this.parser.Parse(Helados);
    });
    $(document).foundation();
  }

  signalReceived(id: number) {
    this.selectedId = id;
    $('#exampleModal1').foundation('open');
  }

  deleteIceCream(id: number) {
    this.requester.DeleteItem(id).subscribe(
      () => {
        $('#heladoEliminadoModal').foundation('open');
        this.requester.ReadItems().subscribe((Helados: Array<Helado>) => {
          this.helados = this.parser.Parse(Helados);
        });
      }
    );
  }

}
