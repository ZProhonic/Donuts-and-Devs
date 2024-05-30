import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Donut } from '../interfaces/donut';
import { DonutDetail } from '../interfaces/donut-detail';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http: HttpClient) { }

  getDonuts(): Observable<Donut[]> {
    return this.http.get<{ results: Donut[] }>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }

  getDonutDetails(url: string): Observable<DonutDetail> {
    return this.http.get<DonutDetail>(url);
  }
}


