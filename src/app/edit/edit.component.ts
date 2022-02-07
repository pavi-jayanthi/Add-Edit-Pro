import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  firstName:any="^[a-Za-Z0-9]+$";
  desig:any="^[a-Za-Z0-9]+$";

  salary:any='/^(\d{1,2})(,\d{2})*(,\d{1,3}){1}(\.\d{1,})?$/g'

  editForm = new FormGroup({
    aname : new FormControl("",Validators.required,Validators.pattern['firstName']),
    adesign : new FormControl("",Validators.required,Validators.pattern['desig']),
    asal : new FormControl("",Validators.required,Validators.pattern['salary']),
    aage : new FormControl("",[Validators.required,Validators.min(18),Validators.max(150)])
  })


  get aname()
  {
    return this.editForm.get("aname")
  }

  get adesign()
  {
    return this.editForm.get("adesign")
  }

  get asal()
  {
    return this.editForm.get("asal")
  }

  get aage()
  {
    return this.editForm.get("aage")
  }

  edit()
  {
    console.log(this.editForm.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
