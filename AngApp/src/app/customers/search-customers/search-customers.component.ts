import { Component, OnInit } from '@angular/core';
import { CustomerSource } from '../../model/customer.interface';
import { ElasticsearchService } from '../../service/elasticsearch.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {
  private static readonly INDEX = 'my_index';
  private static readonly TYPE = 'customer';

  customerSources: CustomerSource[];
  private queryText = '';

  private lastKeypress = 0;

  constructor(private es: ElasticsearchService) {
    this.queryText = '';
  }

  ngOnInit() {

  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;

      this.es.fullTextSearch(
        SearchCustomersComponent.INDEX,
        SearchCustomersComponent.TYPE,
        'address', this.queryText).then(
          response => {
            this.customerSources = response.hits.hits;
            console.log(response);
          }, error => {
            console.error(error);
          }).then(() => {
            console.log('Search Completed!');
          });
    }

    this.lastKeypress = $event.timeStamp;
  }
}
