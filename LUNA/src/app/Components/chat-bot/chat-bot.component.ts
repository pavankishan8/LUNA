import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GptService } from 'src/app/Services/gpt.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {

  @ViewChild('container') private container!: ElementRef<any>;

  searchTxtVal: string = '';
  output: string = '';
  messages: any[] = [];

  constructor(private gpt: GptService, private spinner: NgxSpinnerService) { }

  getResult() {
    try {
      this.spinner.show();
      this.gpt.getData(this.searchTxtVal).subscribe(data => {
        const messages = {
          input: this.searchTxtVal,
          output: this.output = JSON.parse(data),
          timestamp: new Date()
        }
        this.messages.push(messages);
        this.searchTxtVal = '';

        this.spinner.hide();
      });
    } catch {
      this.spinner.hide();
    }
  }

}
