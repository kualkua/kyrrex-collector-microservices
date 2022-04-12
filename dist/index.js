"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.AUTH_SVC = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("./config");
exports.AUTH_SVC = {
    provide: config_1.configService.getSvc().AUTH,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().auth,
            queueOptions: {
                durable: false,
            },
        },
    }),
};
exports.services = config_1.configService.getSvc();
