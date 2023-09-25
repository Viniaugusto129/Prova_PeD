import { Component, Input } from '@angular/core';
import { IBGEService } from '../ibge.service';

@Component({
  selector: 'app-ibge',
  templateUrl: './ibge.component.html',
  styleUrls: ['./ibge.component.css']
})
export class IBGEComponent {
  @Input() region: string = '';
  @Input() FederativeUnits: any[] = [];
  expanded = false;
  FUSelectedExpanded = false;
  FUSelected: any = {};
  cities: any[] = [];

  constructor(private ibgeService: IBGEService) {}

  toggleExpansion(): void {
    this.expanded = !this.expanded;
  }

  showMunicipios(acronymFU: string): void {
    this.ibgeService.getCities_By_Acronym(acronymFU).subscribe((cities: any[]) => {
      this.cities = cities;
      this.FUSelectedExpanded = true;
    });
  }
}