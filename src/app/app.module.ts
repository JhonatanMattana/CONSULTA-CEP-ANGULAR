import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BcInputTextComponent } from './business_core/bc-input-text/bc-input-text.component';
import { ConsultaCepComponent } from './consulta_cep/consulta-cep/consulta-cep.component';
import { BcButtonComponent } from './business_core/bc-button/bc-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BcInputTextComponent,
    ConsultaCepComponent,
    BcButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
