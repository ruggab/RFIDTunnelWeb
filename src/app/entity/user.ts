export class User {
  id!: number | null;
  usr!: string | null;
  psw!: string | null;
  listFunzioni!:Funzione[] | null;
}

export class Funzione {
  id!: number | null;
  codice!: string | null;
  descrizione!: string | null;
  path!: string | null;
}  