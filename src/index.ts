import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { configService } from './config';

export const AUTH_SVC = {
  provide: configService.getSvc().AUTH,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().auth,
        queueOptions: {
          durable: false,
        },
      },
    }),
};

export const WL_SVC = {
  provide: configService.getSvc().WL,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().wl,
        queueOptions: {
          durable: false,
        },
      },
    }),
};

export const BAF_SVC = {
  provide: configService.getSvc().BAF,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().baf,
        queueOptions: {
          durable: false,
        },
      },
    }),
};

export const services = configService.getSvc();
