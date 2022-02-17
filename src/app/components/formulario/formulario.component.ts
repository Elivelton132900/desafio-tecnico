import { Router } from "@angular/router";
import { IndicacoesService } from "./../indicacoes.service";
import { Indicacoes } from "./../indicacoes";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-formulario",
    templateUrl: "./formulario.component.html",
    styleUrls: ["./formulario.component.css", './responsive.css'],
})
export class FormularioComponent implements OnInit {
    formulario: Indicacoes = {
        nome: "",
        telefone: "",
        email: "",
        corretor: "",
        empresa: "",
    };

    mostrarModal = false;
    atualizarCadastroUrl!: boolean;
    id = this.route.url.split("/")[2];

    constructor(
        private indicacoesService: IndicacoesService,
        private route: Router
    ) {}

    ngOnInit(): void {
        this.atualizaIndicacao();
    }

    atualizaIndicacao(): void {
      // Confere se é atualização de indicação ou cadastro de acordo com a URL
        if (this.route.url.includes("atualizar")) {
            this.atualizarCadastroUrl = true;
            this.indicacoesService.readId(this.id).subscribe((item) => {
                this.formulario = item;
            });
        }
    }

    verificaFormulario(): void {
        let formularioValido = true;
        for (let [chave, valor] of Object.entries(this.formulario)) {
            if (chave !== "empresa") { // Empresa é opcional
                if (valor !== "" && formularioValido) {
                    formularioValido = true;
                } else {
                    formularioValido = false;
                }
            }
        }

        if (!formularioValido) {
            window.alert("Preencha todos os campos necessários!");
        } else if (!this.atualizarCadastroUrl) {
          // Se for cadastro de NOVA indicação
            this.indicacoesService.create(this.formulario).subscribe(() => {
              // Após o fluxo mostra modal
                this.mostrarModal = true;
            });
        } else {
          // Se for ATUALIZAÇÃO de alguma indicação existente
          this.indicacoesService.upgrade(this.formulario, this.id).subscribe(() => {
            // Após o fluxo mostra modal
            this.mostrarModal = true
          });
        }
    }
}
