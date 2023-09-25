import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { IBGEComponent } from './ibge/ibge.component'; 
import { IBGEService } from './ibge.service';

@NgModule({
  declarations: [AppComponent, IBGEComponent], 
  imports: [BrowserModule, HttpClientModule, MatCardModule, MatExpansionModule, BrowserAnimationsModule, MatListModule, MatTabsModule, MatButtonModule], // Importe o MatExpansionModule aqui
  providers: [IBGEService],
  bootstrap: [AppComponent],
})
export class AppModule {}