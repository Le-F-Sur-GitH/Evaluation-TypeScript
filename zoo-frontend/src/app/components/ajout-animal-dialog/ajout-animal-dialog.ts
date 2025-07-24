import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateAnimalDto } from '../../dto/create-animal.dto';

@Component({
  selector: 'app-ajout-animal-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './ajout-animal-dialog.html',
})
export class AjoutAnimalDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AjoutAnimalDialogComponent>
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      espece: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
    });
  }

  annuler(): void {
    this.dialogRef.close();
  }

  ajouter(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value as CreateAnimalDto);
    }
  }
}