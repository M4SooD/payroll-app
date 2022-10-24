import { Component, OnInit } from '@angular/core';
import { basicSalaries } from '../calculatorData';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  experience: any = 0;
  profession: string = 'developer';
  city: string = 'Tehran';
  year: number = 1401;
  isShown: boolean = false;
  basicSalary: number;
  bonusSalary: number;
  grossSalary: number;
  basicTax: number;
  highTax: number;
  allTax: number;
  netSalary: number;
  constructor() {}

  ngOnInit(): void {}

  getExperience(event: any): void {
    this.experience = event.target.value;
  }
  getProfession(event: any): void {
    this.profession = event.target.value;
  }
  getYear(event: any): void {
    this.year = event.target.value;
  }
  getCity(event: any): void {
    this.city = event.target.value;
  }

  showResult() {
    this.isShown = true;
    this.getBasicSalary(this.profession);
    this.getBonusSalary(this.experience);
    this.grossSalary = this.basicSalary + this.bonusSalary;
    this.geBasicTaxRate(this.grossSalary);
    this.getHighIncomeTaxRate(this.grossSalary);
    this.allTax = this.highTax + this.basicTax;
    this.netSalary = this.grossSalary - this.allTax;
  }

  getBasicSalary(profession: string) {
    switch (profession.toLowerCase()) {
      case 'developer':
        return (this.basicSalary = basicSalaries.developr);
      case 'cashier':
        return (this.basicSalary = basicSalaries.cashier);
      case 'teacher':
        return (this.basicSalary = basicSalaries.teacher);
    }
  }

  getBonusSalary(experience: number) {
    if (experience <= 3) {
      return (this.bonusSalary = 0);
    } else if (experience >= 4 && experience <= 7) {
      return (this.bonusSalary = (this.basicSalary / 100) * 20);
    } else if (experience >= 8 && experience <= 10) {
      return (this.bonusSalary = (this.basicSalary / 100) * 40);
    } else if (experience >= 11) {
      return (this.bonusSalary = (this.basicSalary / 100) * 60);
    }
  }

  calculateTax(city: string, year: number) {
    if (city === 'Tehran' && year == 1400) {
      return (this.basicTax = (this.grossSalary / 100) * 30);
    } else if (city === 'Tehran' && year == 1401) {
      return (this.basicTax = (this.grossSalary / 100) * 29);
    } else if (city === 'Shiraz' && year == 1400) {
      return (this.basicTax = (this.grossSalary / 100) * 25);
    } else if (city === 'Shiraz' && year == 1401) {
      return (this.basicTax = (this.grossSalary / 100) * 22);
    }
  }

  geBasicTaxRate(salary: number) {
    if (salary > 0 && salary <= 36000) {
      return this.calculateTax(this.city, this.year);
    }
  }

  getHighIncomeTaxRate(salary: number) {
    if (salary > 36000) {
      return (this.highTax = ((this.grossSalary - 36000) / 100) * 50);
    } else if (salary > 45000) {
      return (this.highTax = ((this.grossSalary - 45000) / 100) * 70);
    } else {
      return (this.highTax = 0);
    }
  }
}
