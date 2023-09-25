import { Component, OnInit } from '@angular/core';
import { IBGEService } from './ibge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prova_P&D';

  regions: string[] = ['Norte', 'Nordeste', 'Sudeste', 'Sul', 'Centro-Oeste'];
  federativeunit_By_Region: { [region: string]: any[] } = {};

  constructor(private ibgeService: IBGEService) {}

  ngOnInit(): void {
    this.ibgeService.getFU_By_Region().subscribe((data: any) => {
      this.federativeunit_By_Region = this.transformData(data);
    });
  }

  private transformData(data: { [region: string]: any[] }): { [region: string]: string[] } {
    const transformedData: { [region: string]: string[] } = {};
    for (const region in data) {
      if (data.hasOwnProperty(region)) {
        transformedData[this.regions[parseInt(region) - 1]] = data[region];
      }
    }
    return transformedData;
  }
}