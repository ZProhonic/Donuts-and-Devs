import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DonutsComponent, FamousPeopleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donuts and Devs';
}

