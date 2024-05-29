import { Component } from '@angular/core';
import 'deep-chat';
import 'deep-chat-web-llm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  initialMessages = [
    // { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'Hi, what medical info would you like more information on?' },
  ];
}
