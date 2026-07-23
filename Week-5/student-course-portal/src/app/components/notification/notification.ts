import { Component } from '@angular/core';

import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  /*
   * Providing NotificationService here creates a separate service
   * instance for this component and its child components.
   */
  providers: [NotificationService]
})
export class Notification {

  constructor(public notificationService: NotificationService) {}

  addNotification(): void {
    const nextNumber =
      this.notificationService.getMessages().length + 1;

    this.notificationService.addMessage(
      `Notification ${nextNumber} added successfully`
    );
  }

  clearNotifications(): void {
    this.notificationService.clearMessages();
  }
}