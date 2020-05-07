import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ChartService } from './../_service/Chart.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
filterList = [
  { name: 'Statisticial',  selected: false, id: 1 , child:
    [ { name: 'Temp',  selected: false, id: 2, parent: 1 },
  { name: 'ACF1',  selected: false, id: 3, parent: 1 },
  { name: 'Mean',  selected: false, id: 4 , parent: 1},
  { name: 'Var',  selected: false, id: 5 , parent: 1}]},
  { name: 'Forecasting',  selected: false, id: 6, child:
   [ { name: 'ME',  selected: false, id: 7 , parent: 6},
  { name: 'RMSE',  selected: false, id: 8, parent: 6 },
  { name: 'MAE',  selected: false, id: 9 , parent: 6},
  { name: 'MPE',  selected: false, id: 10 , parent: 6},
  { name: 'MAPE',  selected: false, id: 11 , parent: 6}] },
  { name: 'Temporal',  selected: false, id: 12, child:
  [ { name: 'Max_level_Shift',  selected: false, id: 13, parent: 12 },
  { name: 'Max_var_Shift',  selected: false, id: 14, parent: 12 }] }];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  Changed(filterId: number, parentId: number) {
    console.log(filterId);

    if (parentId === 0) {
      const changedFilter = this.filterList.find(x => x.id === filterId);
      if (changedFilter.selected === true) {
        if (changedFilter.child.length > 0) {
          changedFilter.child.forEach(x => x.selected = true);
        }
       }
    } else {
      const parentFilter = this.filterList.find(x => x.id === parentId);
      const childFilter = parentFilter.child.find(x => x.id === filterId);
      if(childFilter.selected === false) {
        parentFilter.selected = false;
      }
    }

  }

  GetData() {
    this.GenerateRequestPayload();
    this.chartService.GetClusterData(this.filterList);
  }

  GenerateRequestPayload() {
    let request= [];
    this.filterList.forEach(x => {
      let data = [];
      x.child.forEach(y => {
        if (y.selected === true) {
            data.push(y.name);
        }
      });
      const filterName = x.name;
      let obj = {};
      obj[filterName] = [...data];
      request.push(obj);
    });
    console.log(request);
  }

}
