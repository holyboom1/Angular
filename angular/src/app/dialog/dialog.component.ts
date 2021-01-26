import {Component, Inject, Input, OnInit} from '@angular/core';
import {DialogData} from "./DialogData";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent  {


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  LoginForm = new FormGroup(
    {
      userName : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(10),  Validators.pattern('[a-zA-Z ]*')] )
      ,
      password : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(20)])
    }
  )
  registerForm = new FormGroup(
    {
      userName : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(10),  Validators.pattern('[a-zA-Z ]*')] )
      ,
      password : new FormControl( "", [Validators.required,
        Validators.minLength(4), Validators.maxLength(20)]),
      email : new FormControl( "", [Validators.required,
        Validators.email])
    }
  )
//

}
