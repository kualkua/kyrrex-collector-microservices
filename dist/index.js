"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = exports.LOT_SVC = exports.BAF_SVC = exports.WL_SVC = exports.AUTH_SVC = void 0;
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
                durable: true,
            },
        },
    }),
};
exports.WL_SVC = {
    provide: config_1.configService.getSvc().WL,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().wl,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.BAF_SVC = {
    provide: config_1.configService.getSvc().BAF,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().baf,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.LOT_SVC = {
    provide: config_1.configService.getSvc().LOT,
    useFactory: () => microservices_1.ClientProxyFactory.create({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [config_1.configService.getBrokerUri()],
            queue: config_1.configService.getQueue().lot,
            queueOptions: {
                durable: true,
            },
        },
    }),
};
exports.services = config_1.configService.getSvc();
