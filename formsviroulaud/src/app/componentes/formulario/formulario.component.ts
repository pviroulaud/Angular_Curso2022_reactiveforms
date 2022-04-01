import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  

  formularioUsuario:FormGroup= new FormGroup({
    nombre:new FormControl('',[Validators.required,Validators.minLength(3)]),    
    fechaNacimiento:new FormControl('',Validators.required),
    dni:new FormControl('',[Validators.required,Validators.min(10000000),Validators.max(99999999)]),
    mail:new FormControl('',[Validators.required,Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)])
  });


  hoy:Date= new Date();
  dia:string='0';
  mes:string='0';
  fechaMaxima:string="";
  edadCalculada:number=0;
  

  constructor() { }

  ngOnInit(): void {
    if (this.hoy.getDate() >= 10) {
      this.dia = this.hoy.getDate().toString();
    }
    else{
      this.dia = '0' + this.hoy.getDate().toString();
    }
    if ((this.hoy.getMonth()+1) >= 10) {
      this.mes = (this.hoy.getMonth()+1).toString();
    }
    else{
      this.mes = '0' + (this.hoy.getMonth()+1).toString();
    }
    this.fechaMaxima=this.hoy.getFullYear().toString()+'-'+this.mes+'-'+this.dia  
  }
  fechaNacimientoChange()
  {
   this.edadCalculada= this.CalcularEdad();
  }


  CalcularEdad(): number {
    const fn: Date = new Date(this.formularioUsuario.value.fechaNacimiento);
    let edad: number = this.hoy.getFullYear() - fn.getFullYear();
    const m: number = this.hoy.getMonth() - fn.getMonth();
    if (m < 0 || (m === 0 && this.hoy.getDate() < fn.getDate())) {
      edad--;
    }
    return edad;
}




  confirmar()
  {
    console.log(this.formularioUsuario);
    alert('Formulario Validado')
  }


}
