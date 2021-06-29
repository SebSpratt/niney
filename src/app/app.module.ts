import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({ logTrace: false, maxAge: 20})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
