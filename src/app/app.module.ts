import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PfeComponent } from './pfe/pfe.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {PageEvent} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PfeComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatMenuModule, MatExpansionModule, MatPaginatorModule,
    AppRoutingModule, MatButtonModule, MatToolbarModule,
    BrowserAnimationsModule, MatIconModule, MatTreeModule,  HttpClientModule
  ],
  providers: [PageEvent],
  bootstrap: [AppComponent]
})
export class AppModule { }
