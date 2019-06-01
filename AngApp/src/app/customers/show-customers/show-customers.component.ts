import { Component, OnInit } from '@angular/core';
import { CustomerSource } from '../../model/customer.interface';
import { ElasticsearchService } from '../../service/elasticsearch.service';

@Component({
  selector: 'show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {

  private static readonly INDEX = 'my_index';
  private static readonly TYPE = 'customer';
  private static readonly SIZE = 3;

  customerSources: CustomerSource[];
  haveNextPage = false;
  scrollID = '';
  notice = '';

  constructor(private es: ElasticsearchService) {
    this.scrollID = '';
    this.notice = '';
    this.haveNextPage = false;
  }

  ngOnInit() {
    this.es.getAllDocumentsWithScroll(
      ShowCustomersComponent.INDEX,
      ShowCustomersComponent.TYPE,
      ShowCustomersComponent.SIZE).then(
        response => {
          this.customerSources = response.hits.hits;

          if (response.hits.hits.length < response.hits.total) {
            this.haveNextPage = true;
            this.scrollID = response._scroll_id;
          }
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Show Customer Completed!');
        });
  }

  showNextPage() {
    this.es.getNextPage(this.scrollID).then(
      response => {
        this.customerSources = response.hits.hits;
        if (!response.hits.hits) {
          this.haveNextPage = false;
          this.notice = 'There are no more Customers!';
        }
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Show Customer Completed!');
      });
  }
}
