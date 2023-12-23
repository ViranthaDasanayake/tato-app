import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
