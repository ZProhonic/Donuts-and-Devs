import { Component, OnInit } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { Donut } from '../../interfaces/donut';
import { DonutDetail } from '../../interfaces/donut-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
  providers: [DonutService]
})
export class DonutsComponent implements OnInit {
  donuts: DonutDetail[] = [];

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe((donuts: Donut[]) => {
      donuts.forEach(donut => {
        this.donutService.getDonutDetails(donut.ref).subscribe((detail: DonutDetail) => {
          this.donuts.push(detail);
        });
      });
    });
  }
}



