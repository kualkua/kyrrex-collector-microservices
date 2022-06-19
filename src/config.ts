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
      'AUTH-BACK-OFFICE': 'AUTH-BACK-OFFICE_SVC',
    }))();
  }

  public getQueue() {
    return (() => ({
      auth: process.env.AUTH_QUEUE || 'collector.auth',
      wl: process.env.WL_QUEUE || 'collector.wl',
      baf: process.env.BAF_QUEUE || 'collector.baf',
      lot: process.env.LOT_QUEUE || 'collector.lot',
      'auth-back-office': process.env.AUTH_BACK_OFFICE_QUEUE || 'collector.auth-back-office',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
