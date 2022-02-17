import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/template/body/body.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { IndicacaoDetalhesComponent } from './components/indicacao-detalhes/indicacao-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  }, 
  {
    path: 'cadastro',
    component: FormularioComponent
  },
  {
    path: 'indicacao/:id',
    component: IndicacaoDetalhesComponent
  }, 
  {
    path: 'atualizar/:id',
    component: FormularioComponent
  },
  {
    path: 'deletar/:id',
    component: BodyComponent
  }

];
  
  @NgModule({
      declarations: [],
      imports: [RouterModule.forRoot(routes)],
  })
  export class AppRoutingModule {}
  