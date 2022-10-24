import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { basicSalaries } from 'src/app/calculatorData';
@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css'],
})
export class FormResultComponent implements OnInit {
  // @Input() personExperience: any;
  // @Input() personProfession: string;
  // @Input() personCity: string;
  // @Input() personYear: number;
  @Input() isShown: boolean = false;
  @Input() personBasicSalary: number;
  @Input() personBonusSalary: number;
  @Input() personGrossSalary: number;
  @Input() personBasicTax: number;
  @Input() personHighTax: number;
  @Input() personAllTax: number;
  @Input() personNetSalary: number;
  constructor() {}

  ngOnInit(): void {}

}
