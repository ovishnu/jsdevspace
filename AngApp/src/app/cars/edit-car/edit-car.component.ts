import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../service/car.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'mdb-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      image: ['', Validators.required],
      name: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      number: ['', Validators.required]
    });
    const id = localStorage.getItem('editUserId');
    if (!id) {
      this.router.navigate(['/cars/list-car']);
    }
    this.carService.getCarById(+id).subscribe(data => {
      this.editForm.setValue(data[0]);

    });
  }

  onSubmit() {
    this.carService.updateCar(this.editForm.value).pipe(first()).subscribe( data => {
        this.router.navigate(['/cars/list-car']);
    },
    error => {
      alert(error);
    });
  }
}
