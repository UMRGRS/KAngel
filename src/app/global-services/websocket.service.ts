import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService implements OnDestroy {
  private ws!: WebSocket;
  private messageSubject = new Subject<string>();

  public messages$: Observable<string> = this.messageSubject.asObservable();

  connect(url: string) {
    this.ws = new WebSocket(url);

    this.ws.onopen = (event) => {
      console.log('WebSocket connection opened');
    };

    this.ws.onmessage = (event) => {
      this.messageSubject.next(event.data);
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket connection closed');
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  ngOnDestroy() {
    if (this.ws) {
      this.ws.close();
    }
    this.messageSubject.complete();
  }
}
