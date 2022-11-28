import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  Name=""
  PatientId=""
  Address=""
  contactNo=""
  DateofAppointment=""
  image=""
  DoctorName=""

  readValues=() =>
  {

    let data:any=
    {
      "Name":this.Name,
      "PatientId":this.PatientId,
      "Address":this.Address,
      "contactNo":this.contactNo,
      "DateofAppointment":this.DateofAppointment,
      "image":this.image,
      "DoctorName":this.DoctorName
    }

    console.log(data)

  }


}
