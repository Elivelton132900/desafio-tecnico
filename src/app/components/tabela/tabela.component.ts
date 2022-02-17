import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IndicacoesService } from "../indicacoes.service";
import { Indicacoes } from "../indicacoes";

@Component({
    selector: "app-tabela",
    templateUrl: "./tabela.component.html",
    styleUrls: ["./tabela.component.css", "./responsive.css"]
})
export class TabelaComponent implements OnInit {

    tabela!: Indicacoes[];
    constructor(
        private indicacoesService: IndicacoesService,
        private route: ActivatedRoute,
        private router: Router //this.router.navigate(['/'])
    ) {}

    ngOnInit(): void {
      // Responsável por monitorar a mudança de url e disparar a função que deleta
      this.route.params.subscribe((params) => {
        if (params['id'] !== undefined) {
          this.indicacoesService.delete(params['id']).subscribe(() => this.router.navigate(['']))
        }
      })
        this.indicacoesService.read().subscribe((lista) => {
            this.tabela = lista;
        });
    }


}
