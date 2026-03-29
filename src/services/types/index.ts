// mi clase abstracta solo define metodos abstractos 
export interface INotificationService {
  send(recipient: string, message: string): void;
}