import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FamousPerson } from '../interfaces/famous-person';

@Injectable({
  providedIn: 'root'
})
export class FamousPeopleService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) { }

  getFamousPeople(): Observable<FamousPerson[]> {
    return this.http.get<{ complete: FamousPerson[] }>(this.apiUrl).pipe(
      map(response => response.complete)
    );
  }
}

