import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mdb-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  editCar(car: Car): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', car.id.toString());
    this.router.navigate(['/cars/edit-car']);
  }

  deleteCar(car: Car) {
    this.carService.deleteCar(car.id).subscribe(data => {
      this.cars = this.cars.filter(c => c !== car);
    });
  }
}
