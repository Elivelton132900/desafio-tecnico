import { StringMap, StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export interface Indicacoes {
    nome: string,
    corretor: string,
    status?: string,
    telefone: string,
    empresa?: string,
    email: string,
    id?: string
}
