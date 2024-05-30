import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FamousPeopleService } from '../../services/famous-people.service';
import { FamousPerson } from '../../interfaces/famous-person';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css'],
  providers: [FamousPeopleService]
})
export class FamousPeopleComponent implements OnInit {
  people: FamousPerson[] = [];

  constructor(private famousPeopleService: FamousPeopleService) { }

  ngOnInit(): void {
    this.famousPeopleService.getFamousPeople().subscribe(data => {
      this.people = data;
    });
  }
}


