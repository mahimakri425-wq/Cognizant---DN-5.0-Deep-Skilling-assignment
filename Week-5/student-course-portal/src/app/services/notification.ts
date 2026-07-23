import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  private messages: string[] = [];

  constructor() {
    console.log('New NotificationService instance created');
  }

  addMessage(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }

  clearMessages(): void {
    this.messages = [];
  }
}