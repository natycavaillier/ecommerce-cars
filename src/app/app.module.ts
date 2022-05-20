import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { VenderComponent } from './components/vender/vender.component';
import { NegociarComponent } from './components/negociar/negociar.component';
import { CarroComponent } from './components/carro/carro.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ComprarComponent,
    CadastroComponent,
    LoginComponent,
    VenderComponent,
    FeedbackComponent,
    NegociarComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
