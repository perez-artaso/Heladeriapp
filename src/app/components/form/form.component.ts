import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestingService } from 'src/app/services/requesting.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private requester: RequestingService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      sabor: ['', Validators.required],
      tipo: ['0', Validators.required],
      kilos: ['', Validators.required]
    });
  }

  createIceCream() {

    this.requester.CreateItem(
      this.myForm.get('sabor').value,
      this.myForm.get('tipo').value,
      this.myForm.get('kilos').value).subscribe(
        (successMessage: any) => {
      alert(successMessage.message);
    });
  }

}
