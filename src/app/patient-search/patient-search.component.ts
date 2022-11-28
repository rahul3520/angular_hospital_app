import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  PatientId=""

  readValues=() =>
  {

    let data:any=
    {
      "PatientId":this.PatientId
    }

    console.log(data)

  }

}
