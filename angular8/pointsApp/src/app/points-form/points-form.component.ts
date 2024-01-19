import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-points-form',
  templateUrl: './points-form.component.html',
  styleUrls: ['./points-form.component.css']
})
export class PointsFormComponent {
  pointsForm: FormGroup;
  points: {num1: number, num2: number}[] = [];
  sum: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.pointsForm = this.formBuilder.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.pointsForm.valid) {
      this.points.push(this.pointsForm.value);
      this.sum += this.pointsForm.value.num1 + this.pointsForm.value.num2;
      this.pointsForm.reset();
    }
  }

  addPoint() {

    this.onSubmit();
  }
}
