import { Component, ElementRef, ViewChild, HostListener, Input } from '@angular/core';
import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { ChosenDate, DaterangepickerComponent, TimePeriod } from 'ngx-daterangepicker-material/daterangepicker.component';
dayjs.extend(utc);
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  
  @ViewChild(DaterangepickerDirective, { static: true }) pickerDirective: DaterangepickerDirective;
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs } | undefined;
  selectedValue: any;
  longText = `The Shiba Inu is the smallest`;
  ranges: any = {
    'Today': [dayjs(), dayjs()],
    'Yesterday': [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')],
    'Last 7 Days': [dayjs().subtract(6, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')],
    'Last Month': [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
  };

  percentageValue = 50;
  percentageValue2 = 80;
  percentageValue3 = 30;
  percentageValue4 = 45;

  constructor() {
    this.selected = undefined;
  }


  open(e: MouseEvent): void {
    this.pickerDirective.open(e);
  }
}
