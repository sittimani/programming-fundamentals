import { Injectable } from '@angular/core';
import { Employer } from '../interface/employer.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private employers: Employer[] = [ 
    {
      name: "manikandan",
      email: "mani@aspiresys.com",
      experience: 2,
      team: "MEAN",
      password: (localStorage.getItem('password') || "")
    }
  ]


  public setEmployer(data: Employer) {
    this.employers.push(data)
  }

  public getEmployers() {
    return this.employers
  }
}
