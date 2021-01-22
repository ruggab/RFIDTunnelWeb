

export class TipoReader {
  id!: number | null;
  codice!: string | null;
  descrizione!: string | null;
}  


export class Reader {
  
  id!: number | null;
  idTipoReader!: number | null;
  ipAdress!: string | null;
  porta!: string | null;

}  