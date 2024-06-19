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
      COLLECTOR_GATEWAY_SVC: 'COLLECTOR_GATEWAY_SVC',
      TRANSACTIONS_MONITORING: 'TRANSACTIONS_MONITORING_SVC',
      WL_TRANSACTIONS_MONITORING: 'WL_TRANSACTIONS_MONITORING',
      LAUNCHPAD: 'LAUNCHPAD_SVC',
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
      RECAPTCHA_SVC: 'RECAPTCHA_SVC',
      MESSAGES_MEDIATOR_SVC: 'MESSAGES_MEDIATOR_SVC',
      IP_INFO_SVC: 'IP_INFO_SVC',
      VIRTUAL_CARD_SVC: 'VIRTUAL_CARD_SVC',
    }))();
  }

  public getQueue() {
    return (() => ({
      auth: process.env.AUTH_QUEUE || 'collector.auth',
      collector_gateway: process.env.COLLECTOR_GATEWAY_QUEUE || 'collector.gateway',
      transactions_monitoring: process.env.AUTH_QUEUE || 'collector.transactions.monitoring',
      wl_transactions_monitoring: process.env.WL_TRANSACTIONS_MONITORING || 'wl.transactions.monitoring',
      launchpad: process.env.LAUNCHPAD_QUEUE || 'collector.launchpad',
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
      recaptcha: process.env.RECAPTCHA_QUEUE || 'collector.recaptcha',
      messages_mediator: process.env.MESSAGES_MEDIATOR_QUEUE || 'collector.messages_mediator',
      ip_info: process.env.IP_INFO_QUEUE || 'collector.ip_info',
      virtual_card: process.env.VIRTUAL_CARD_QUEUE || 'collector.virtual_card',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
