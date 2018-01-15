import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextesComponent } from './textes/textes.component';
import { TexteService } from './texte.service';


@NgModule({
  declarations: [
    AppComponent,
    TextesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TexteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
