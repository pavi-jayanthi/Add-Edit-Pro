import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  firstName:any="^[a-Za-Z0-9]+$";
  desig:any="^[a-Za-Z0-9]+$";

  salary:any='/^(\d{1,2})(,\d{2})*(,\d{1,3}){1}(\.\d{1,})?$/g'

  addForm = new FormGroup({
    ename : new FormControl("",Validators.required,Validators.pattern['firstName']),
    edesign : new FormControl("",Validators.required,Validators.pattern['desig']),
    esal : new FormControl("",Validators.required,Validators.pattern['salary']),
    eage : new FormControl("",[Validators.required,Validators.min(18),Validators.max(150)])
  })


  get ename()
  {
    return this.addForm.get("ename")
  }

  get edesign()
  {
    return this.addForm.get("edesign")
  }

  get esal()
  {
    return this.addForm.get("esal")
  }

  get eage()
  {
    return this.addForm.get("eage")
  }

  add()
  {
    console.log(this.addForm.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
