import { IAppService } from "./services/types";
import { BasicContainer } from "@computerwwwizards/dependency-injection";

const initServices = () => {
    const container = new BasicContainer<IAppService>();

    const notifierPlugin  = (ctx: BasicContainer<IAppService>) => {
        ctx.bindTo('notifier', (ctx) => ({
            send: (recipient: string, message: string) => {
                console.log(`Enviando notificación a ${recipient}: ${message}`);
            }
        }), 'singleton')
    }

    container.registerPlugin(notifierPlugin);

    container.applyPlugins();

    return container;
}

export default initServices;