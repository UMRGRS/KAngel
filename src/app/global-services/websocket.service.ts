import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private ws!: WebSocket;

  connect(url: string) {
    this.ws = new WebSocket(url);

    this.ws.onopen = (event) => {
      console.log('WebSocket connection opened:', event);
    };

    this.ws.onmessage = (event) => {
      console.log('Message received:', event.data);
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  sendMessage(message: string) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.error('WebSocket is not open. Ready state:', this.ws.readyState);
    }
  }

  ngOnDestroy() {
    if (this.ws) {
      this.ws.close();
    }
  }
}
