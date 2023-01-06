// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: string | undefined) {}

  public getBrokerUri(): string {
    return process.env.BROKER_URI || 'amqp://rabbitmq:rabbitmq@localhost:5672';
  }

  public getSvc() {
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
      CHAINCORE: 'CHAINCORE_SVC',
      REFRESHES: 'REFRESHES_SVC',
      MEDIATOR_SVC: 'MEDIATOR_SVC',
      MEMBERS_SVC: 'MEMBERS_SVC',
      TRANSLATES_SVC: 'TRANSLATES_SVC',
    }))();
  }

  public getQueue() {
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
      chaincore: process.env.CHAINCORE_QUEUE || 'collector.chaincore',
      refreshes: process.env.REFRESHES_QUEUE || 'ms.refreshes',
      mediator: process.env.MEDIATOR_QUEUE || 'collector.mediator',
      memebers: process.env.MEMBERS_QUEUE || 'collector.members',
      translates: process.env.TRANSLATES_QUEUE || 'collector.translates',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
