import { Component } from '@angular/core';

@Component({
  selector: 'app-patientdel',
  templateUrl: './patientdel.component.html',
  styleUrls: ['./patientdel.component.css']
})
export class PatientdelComponent {


  PatientId=""

  readValues=() =>
  {
    
    let data:any={
    
      "PatientId":this.PatientId
    }

    console.log(data)
  }

}
