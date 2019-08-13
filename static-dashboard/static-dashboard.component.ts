import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticDashboardServiceService } from './static-dashboard-service.service';

@Component({
  selector: 'app-static-dashboard',
  templateUrl: './static-dashboard.component.html',
  styleUrls: ['./static-dashboard.component.css']
})
export class StaticDashboardComponent implements OnInit {
  @Input() welcomeName: any;
  @Input() userType: any;
  data: any;
  constructor(private router: Router, private route: ActivatedRoute, private service: StaticDashboardServiceService) {

  }

  ngOnInit() {
    if (sessionStorage.getItem("key") === null) {
      alert("Session timeout, please login");
      this.router.navigate(['/']);
    } else {
      this.route.queryParams.subscribe(params => {
        this.welcomeName = params['name'];
        this.userType = params['userType'];
      })
    }
    this.getData();
  }

  getData(){
    console.log("In Component getData()");
    this.service.getData({fileName: "dashboard.xlsx"}).subscribe((res) => {
        console.log("Hi there ?");
        this.data = res;
        console.log("Actual Data: "+JSON.stringify(this.data));
    });
    console.log("Exiting Component getData()");
  } 
}
