import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioUsuario:FormGroup= new FormGroup({
    nombre:new FormControl(''),
    edad: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  confirmar()
  {

  }
}
