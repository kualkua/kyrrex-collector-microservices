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
            WL_BAF: 'WL_BAF',
            'AUTH-BACK-OFFICE': 'AUTH-BACK-OFFICE_SVC',
            MAILER: 'MAILER_SVC',
            USERS_ACTIONS_LOGGER: 'USERS_ACTIONS_LOGGER',
            PAYMENTS: 'PAYMENTS_SVC',
            REFRESHES: 'REFRESHES_SVC',
            MEDIATOR_SVC: 'MEDIATOR_SVC',
        }))();
    }
    getQueue() {
        return (() => ({
            auth: process.env.AUTH_QUEUE || 'collector.auth',
            static: process.env.STATIC_SVC || 'collector.static',
            wl: process.env.WL_QUEUE || 'collector.wl',
            baf: process.env.BAF_QUEUE || 'collector.baf',
            lot: process.env.LOT_QUEUE || 'collector.lot',
            rates: process.env.RATES_QUEUE || 'collector.rates',
            wl_baf: process.env.WL_BAF || 'wl.baf',
            users_actions_logger: process.env.USERS_ACTIONS_LOGGER || 'ms.users-actions-logger',
            'auth-back-office': process.env.AUTH_BACK_OFFICE_QUEUE || 'collector.auth-back-office',
            mailer: process.env.MAILER_QUEUE || 'ms.mailer',
            payments: process.env.PAYMENTS_QUEUE || 'collector.payments',
            refreshes: process.env.REFRESHES_QUEUE || 'ms.refreshes',
            mediator: process.env.MEDIATOR_QUEUE || 'collector.mediator',
        }))();
    }
    getEnv() {
        return this.env || 'development';
    }
}
const configService = new ConfigService(process.env.NODE_ENV);
exports.configService = configService;
