import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElasticsearchService } from '../../service/elasticsearch.service';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  isConnected = false;

  form: FormGroup;
  status: string;

  constructor(private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;

    this.form = new FormGroup({
      index: new FormControl('my_index', Validators.required),
      id: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }

  onSubmit(value) {
    this.es.addToIndex({
      index: value.index,
      type: 'customer',
      id: value.id,
      body: {
        fullname: value.fullname,
        age: value.age,
        address: value.address,
        published: new Date().toLocaleString()
      }
    }).then((result) => {
      console.log(result);
      alert('Document added, see log for more info');
    }, error => {
      alert('Something went wrong, see log for more info');
      console.error(error);
    });
  }

}
