import { Container } from "./container";
import { EmailNotificationService, SmsNotificationService } from "./services/impl";
import { INotificationService } from "./services/types";

const initServices = () => {
    const container = new Container();
    container.register<INotificationService>("smsNotifier", new SmsNotificationService());
    container.register<INotificationService>("emailNotifier", EmailNotificationService.getInstance());

    return container;
}

export default initServices;