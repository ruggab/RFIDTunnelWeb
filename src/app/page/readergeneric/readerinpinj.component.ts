import { Component, OnInit} from '@angular/core';
import { ReaderGenericComponent } from './readergeneric.component';

@Component({
  selector: 'app-readerinpinj',
  templateUrl: './readerinpinj.component.html',
  styleUrls:  ['./readergeneric.component.css']
})


export class ReaderInpinjComponent extends ReaderGenericComponent implements OnInit {

 
  readerModes = [
    { id: 1, name: "AutoSetDenseReader" },
    { id: 2, name: "AutoSetCustom" },
    { id: 3, name: "AutoSetDenseReaderDeepScan" },
    { id: 4, name: "AutoSetStaticDRM" },
    { id: 5, name: "AutoSetStaticFast" },
    
  ];

  portNumbers = [
    { id: 1, name: "Uno" },
    { id: 2, name: "Due" },
    { id: 3, name: "Tre" },
    { id: 4, name: "Quattro" }
  ];
  
  startModes = [
    { id: 1, name: "GpiTrigger" },
    { id: 2, name: "Immediate" },
    { id: 3, name: "Periodic" }
  ];

  stopModes = [
    { id: 1, name: "GpiTrigger" },
    { id: 2, name: "Duration" },
    { id: 3, name: "None" }
    
  ];
  



  public setForm(idReader: number) {
      this.readerService.getReaderById(idReader).subscribe(x => {
        this.selectedReader = x;
        this.setAntennaArray(this.selectedReader.listAntenna);
        this.editForm = this.formBuilder.group({
            id: [this.selectedReader.id],
            idTipoReader: [this.selectedReader.idTipoReader],
            ipAdress: [this.selectedReader.ipAdress],
            readerMode: [this.selectedReader.readerMode],
            separatore: [this.selectedReader.separatore],
            portaIn1: [this.selectedReader.portaIn1],
            portaIn2: [this.selectedReader.portaIn2],
            portaIn3: [this.selectedReader.portaIn3],
            portaIn4: [this.selectedReader.portaIn4],
            portaOut1: [this.selectedReader.portaOut1],
            portaOut2: [this.selectedReader.portaOut2],
            portaOut3: [this.selectedReader.portaOut3],
            portaOut4: [this.selectedReader.portaOut4],
            autoStartActive: [this.selectedReader.autoStartActive],
            numPortaAutostart: [this.selectedReader.numPortaAutostart],
            autoStopMode: [this.selectedReader.autoStopMode],
            autoStartMode: [this.selectedReader.autoStartMode],
            createOutFile: [this.selectedReader.createOutFile],
            nameOutLog: [this.selectedReader.nameOutLog],
            extentionOutLog: [this.selectedReader.extentionOutLog],
            createErrFile: [this.selectedReader.createErrFile],
            nameErrLog: [this.selectedReader.nameErrLog],
            extentionErrLog: [this.selectedReader.extentionErrLog],
            enableUserTid: [this.selectedReader.enableUserTid],
            idUser: [this.selectedReader.idUser],
            idTid: [this.selectedReader.idTid]
        });
      })   
  }

 
 

  get f() { 
    return this.editForm.controls; 
  }
 
  
}






