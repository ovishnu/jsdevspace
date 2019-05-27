import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable()
export class CarService {
  private baseUrl = 'http://localhost:3000/api/v1/';
  constructor(private httpClient: HttpClient) {}

  getCars() {
    return this.httpClient.get<Car[]>(this.baseUrl + 'cars');
  }

  updateCar(car: Car) {
    return this.httpClient.put(this.baseUrl + 'cars/' + car.id, car);
  }

  createCar(car: Car) {
    return this.httpClient.post(this.baseUrl + 'cars' , car);
  }

  deleteCar(id: number) {
    return this.httpClient.delete(this.baseUrl + 'cars/' + id);
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.baseUrl + 'cars/' + id);
  }
}
