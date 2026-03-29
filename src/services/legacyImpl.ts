export class EmailSender {
  send(to: string, message: string): void {
    console.log(`Enviando email a ${to}: ${message}`);
  }
}

export class OrderService {
  private emailSender: EmailSender;

  constructor() {
    this.emailSender = new EmailSender();
  }

  placeOrder(orderId: string, userEmail: string): void {
    console.log(`Procesando orden ${orderId}`);
    this.emailSender.send(userEmail, `Tu orden ${orderId} fue confirmada`);
  }
}
