import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngchatService {
  private showChat = new BehaviorSubject<boolean>(false);
  showChat$ = this.showChat.asObservable();

  constructor() { }

  toggleChatWindow() {
    this.showChat.next(!this.showChat.getValue());
  }
}
