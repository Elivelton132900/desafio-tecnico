import { IndicacoesService } from './../indicacoes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Indicacoes } from '../indicacoes';

@Component({
  selector: 'app-indicacao-detalhes',
  templateUrl: './indicacao-detalhes.component.html',
  styleUrls: ['./indicacao-detalhes.component.css', './responsive.css']
})
export class IndicacaoDetalhesComponent implements OnInit {

  item: Indicacoes[] = []

  id = this.route.snapshot.paramMap.get('id') || ''


  constructor(
    private indicacoesService: IndicacoesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.indicacoesService.readId(this.id).subscribe((item) => {
      console.log(item)
      this.item.push(item)
    })
  }
}
