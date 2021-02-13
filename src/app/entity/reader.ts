

export class Reader {
  
  id!: number;
  idTipoReader!: number | null;
  ipAdress!: string | null;
  porta!: string | null;
  separatore!: string | null;
  numAntenne!: string | null;
  
  //GPIO 
  activatePort!: string | null;
  onlinePort!: string | null;
  greenPort!: string | null;
  redPort!: string | null;
  yellowPort!: string | null;

	
	
//	--------- LOG FILE PARAMETERS -----------
    createOutFile!: boolean; 	//S/N	
	nameOutLog!: string | null;	//Z-OUT_	
	extentionOutLog!: string | null;	//.log_	
	createErrFile!: boolean;	//S/N	
	nameErrLog!: string | null;	//Z-ERR_	
	extentionErrLog!: string | null;	//.log_	
	
/*  # --------- PRINT PARAMETERS ------------*/
	
	printDetails!: string | null;


	private _listAntenna!: Array<Antenna>;
  
	get listAntenna(): Array<Antenna> {
        return this._listAntenna;
    }
    set listAntenna(value: Array<Antenna>) {
        this._listAntenna = value;
    }
  
}  


export class Antenna {

	id!: number;
	idReader!:number;
	position!:number;
	enable!:boolean;
	maxRxSensitivity!:boolean;
	maxTxPower!:boolean;
	powerinDbm!:number;
	sensitivityinDbm!:number;
}




