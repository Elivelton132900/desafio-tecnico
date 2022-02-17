import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/template/aside/aside.component';
import { BodyComponent } from './components/template/body/body.component';
import { BotaoIndicacaoComponent } from './components/botao-indicacao/botao-indicacao.component';
import { CardsComponent } from './components/cards/cards.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { IndicacaoDetalhesComponent } from './components/indicacao-detalhes/indicacao-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    BodyComponent,
    BotaoIndicacaoComponent,
    CardsComponent,
    TabelaComponent,
    FormularioComponent,
    ModalComponent,
    IndicacaoDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
