import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  res:any;
  constructor(private http: HttpClient) {
  
  }

  ngOnInit(): void {
    let url = "https://cyan-tired-caiman.cyclic.app/api/movies"
    this.http.get(url).subscribe((res)=> {
      console.log(res);
      this.res = res
      
    })
    
  }

}
