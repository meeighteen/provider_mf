import { INotificationService } from "../types";

export class EmailNotificationService implements INotificationService {
  private static _instance: EmailNotificationService | null = null;

  private constructor(
    private readonly from: string = "noreply@app.com"
  ) {}

  static getInstance(): EmailNotificationService {
    if (!EmailNotificationService._instance) {
      EmailNotificationService._instance = new EmailNotificationService();
    }
    return EmailNotificationService._instance;
  }

  send(recipient: string, message: string): void {
    console.log(` [${this.from}] → ${recipient}: ${message}`);
  }
}

export class SmsNotificationService implements INotificationService {
  send(recipient: string, message: string): void {
    console.log(`SMS → ${recipient}: ${message}`);
  }
}

export class SlackNotificationService implements INotificationService {
  send(recipient: string, message: string): void {
    console.log(`Slack → #${recipient}: ${message}`);
  }
}

export class FakeNotificationService implements INotificationService {
  public sentMessages: Array<{ recipient: string; message: string }> = [];

  send(recipient: string, message: string): void {
    this.sentMessages.push({ recipient, message });
  }
}