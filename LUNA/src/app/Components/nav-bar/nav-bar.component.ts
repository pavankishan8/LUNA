import { Component } from '@angular/core';
import { AngchatService } from 'src/app/Services/angchat.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  messages: string[] = [];

  showChat = false;

  constructor(private chatService: AngchatService) {}

  ngOnInit(): void {
    this.chatService.showChat$.subscribe(show => {
      this.showChat = show;
    });
  }

  toggleChatWindow() {
    this.chatService.toggleChatWindow();
  }
}
