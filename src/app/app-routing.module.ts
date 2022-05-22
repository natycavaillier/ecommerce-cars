import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NaoEncontradoComponent } from './components/nao-encontrador/nao-encontrado/nao-encontrado.component';
import { NegociarComponent } from './components/negociar/negociar.component';
import { VenderComponent } from './components/vender/vender.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'comprar', component: ComprarComponent },
  { path: 'comprar/negociar/:id', component: NegociarComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vender', component: VenderComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: NaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

