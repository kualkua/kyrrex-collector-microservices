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
          durable: true,
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
          durable: true,
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
          durable: true,
        },
      },
    }),
};

export const LOT_SVC = {
  provide: configService.getSvc().LOT,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().lot,
        queueOptions: {
          durable: true,
        },
      },
    }),
};

export const RATES_SVC = {
  provide: configService.getSvc().RATES,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().rates,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const STATIC_SVC = {
  provide: configService.getSvc().STATIC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().static,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const AUTH_BACK_OFFICE_SVC = {
    provide: configService.getSvc()['AUTH-BACK-OFFICE'],
    useFactory: () =>
        ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [configService.getBrokerUri()],
                queue: configService.getQueue()['auth-back-office'],
                queueOptions: {
                    durable: true,
                },
            },
        }),
};

export const WL_BAF = {
  provide: configService.getSvc().WL_BAF,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().wl_baf,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const REFRESHES_SVC = {
  provide: configService.getSvc().REFRESHES,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().refreshes,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const MAILER_SVC = {
  provide: configService.getSvc().MAILER,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().mailer,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const PAYMENTS_SVC = {
  provide: configService.getSvc().PAYMENTS,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().payments,
              queueOptions: {
                  durable: true,
              },
          },
      }),
};

export const USERS_ACTIONS_LOGGER_SVC = {
  provide: configService.getSvc().USERS_ACTIONS_LOGGER,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().users_actions_logger,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const MEDIATOR_SVC = {
  provide: configService.getSvc().MEDIATOR_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().mediator,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const services = configService.getSvc();
