"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getBrokerUri() {
        return process.env.BROKER_URI || 'amqp://rabbitmq:rabbitmq@localhost:5672';
    }
    getSvc() {
        return (() => ({
            AUTH: 'AUTH_SVC',
            WL: 'WL_SVC',
        }))();
    }
    getQueue() {
        return (() => ({
            auth: process.env.AUTH_QUEUE || 'auth',
            wl: process.env.AUTH_QUEUE || 'wl',
        }))();
    }
    getEnv() {
        return this.env || 'development';
    }
}
const configService = new ConfigService(process.env.NODE_ENV);
exports.configService = configService;