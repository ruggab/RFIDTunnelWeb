export class User {
  id!: number | null;
  usr!: string | null;
  psw!: string | null;
  listFunzioni!:Funzione[] | null;

  hasFunzione(codFun:string) {
    let ret = this.listFunzioni?.find(fun =>fun.codice === codFun);
    console.log(ret);
    return ret;
  }
}

export class Funzione {
  id!: number | null;
  codice!: string | null;
  descrizione!: string | null;
  path!: string | null;
}  