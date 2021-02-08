

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

	
//# --------- INPUT / OUTPUT FILE PARAMETERS --	
	inputMode!: string | null;
	inPathFile!: string | null;
	extensionInFile!: string | null;
	outputMode!: string | null;
	outPathFile!: string | null;
	extensionOutFile!: string | null;
	prefixPackage!: string | null;
	postfixPackage!: string | null;	
	lineLenght!: string | null;	
	fieldsNumber!: string | null;
		
//# --------- TAG ID PARAMETERS --------------------------------------------
	tagPackageID!: string | null;	
	tagItemID!: string | null;	
	
//	--------- LOG FILE PARAMETERS -----------
  createOutFile!: string | null;	//S/N	
	nameOutLog!: string | null;	//Z-OUT_	
	extentionOutLog!: string | null;	//.log_	
	createErrFile!: string | null;	//S/N	
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
	position!:number;
	idReader!:number;
	maxRxSensitivity!:string;
	maxTxPower!:string;
	powerinDbm!:string;
	sensitivityinDbm!:string;
}




