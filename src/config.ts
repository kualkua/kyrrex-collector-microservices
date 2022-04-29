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
    }))();
  }

  public getQueue() {
    return (() => ({
      auth: process.env.AUTH_QUEUE || 'auth',
      wl: process.env.WL_QUEUE || 'wl',
      baf: process.env.BAF_QUEUE || 'baf',
      lot: process.env.LOT_QUEUE || 'lot',
    }))();
  }

  public getEnv() {
    return this.env || 'development';
  }
}

const configService = new ConfigService(process.env.NODE_ENV);

export { configService };
