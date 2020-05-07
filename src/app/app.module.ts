import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './filters/filters.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import { ChartComponent } from './Chart/Chart.component';
import { FormsModule } from '@angular/forms';
import { ChartService } from './_service/Chart.service';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      FiltersComponent,
      ChartComponent
   ],
   imports: [
BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCheckboxModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
      HttpClientModule
   ],
   providers: [ChartService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
