

export class Reader {
  
  id!: number;
  idTipoReader!: number | null;
  ipAdress!: string | null;
  porta!: string | null;
  separatore!: string | null;
  numAntenne!: string | null;
  portaComandi!: string | null;
  
//	--------- LOG FILE PARAMETERS -----------
    createOutFile!: boolean; 	//S/N	
	nameOutLog!: string | null;	//Z-OUT_	
	extentionOutLog!: string | null;	//.log_	
	createErrFile!: boolean;	//S/N	
	nameErrLog!: string | null;	//Z-ERR_	
	extentionErrLog!: string | null;	//.log_	
	
    readerMode!:number;
    
	portaIn1!: boolean;
	portaIn2!: boolean;
	portaIn3!: boolean;
	portaIn4!: boolean;

	portaOut1!: boolean;
	portaOut2!: boolean;
	portaOut3!: boolean;
	portaOut4!: boolean;

	autoStartActive!: boolean;
	numPortaAutostart!: number;
	autoStartMode!: number;
	autoStopMode!: number;


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




