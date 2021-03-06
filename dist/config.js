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
            BAF: 'BAF_SVC',
            LOT: 'LOT_SVC',
            RATES: 'RATES_SVC',
            STATIC: 'STATIC_SVC',
            'AUTH-BACK-OFFICE': 'AUTH-BACK-OFFICE_SVC',
        }))();
    }
    getQueue() {
        return (() => ({
            auth: process.env.AUTH_QUEUE || 'collector.auth',
            static: process.env.AUTH_QUEUE || 'collector.static',
            wl: process.env.WL_QUEUE || 'collector.wl',
            baf: process.env.BAF_QUEUE || 'collector.baf',
            lot: process.env.LOT_QUEUE || 'collector.lot',
            rates: process.env.RATES_QUEUE || 'collector.rates',
            'auth-back-office': process.env.AUTH_BACK_OFFICE_QUEUE || 'collector.auth-back-office',
        }))();
    }
    getEnv() {
        return this.env || 'development';
    }
}
const configService = new ConfigService(process.env.NODE_ENV);
exports.configService = configService;
