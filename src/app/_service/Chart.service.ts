import { Injectable } from '@angular/core';
import { ClusterData } from './../ClusterData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
baseUrl = '';
clusterCoordinates: [];
clusterData2 =
{
   Cluster: {x: [18.7, 19.4, 17.2, 15.5, 15.1 , 15.4],
       y: [0.499611603 , 0.50435887, 0.500565633, 0.481717408, 0.474428671 , 0.077237609] },

   Cluster2: {
      x: [8.7, 9.4, 7.2, 5.5, 5.1 , 5.4],
      y: [1.499611603 , 1.50435887, 1.500565633, 1.481717408, 1.474428671 , 1.077237609] },

   center : {
         x: [3.7, 2.4],
         y: [0.499611603 , 0.50435887] }
};


constructor(private http: HttpClient) { }


GetClusterData(filters) {
   this.http.post(this.baseUrl, filters).subscribe(
      (response) => {
         this.clusterCoordinates = response as [];
         console.log(response);
      },
      (error) => {
         console.log(error);
      },
      () => {
         console.log('data fetched');
      }
   );
}

}
