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

export const COLLECTOR_GATEWAY_SVC = {
  provide: configService.getSvc().COLLECTOR_GATEWAY_SVC,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().collector_gateway,
        queueOptions: {
          durable: true,
        },
      },
    }),
};

export const TRANSACTIONS_MONITORING_SVC = {
  provide: configService.getSvc().TRANSACTIONS_MONITORING,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().transactions_monitoring,
        queueOptions: {
          durable: true,
        },
      },
    }),
};

export const WL_TRANSACTIONS_MONITORING = {
  provide: configService.getSvc().WL_TRANSACTIONS_MONITORING,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().wl_transactions_monitoring,
        queueOptions: {
          durable: true,
        },
      },
    }),
};

export const LAUNCHPAD_SVC = {
  provide: configService.getSvc().LAUNCHPAD,
  useFactory: () =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getBrokerUri()],
        queue: configService.getQueue().launchpad,
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

export const CHAINCORE_SVC = {
  provide: configService.getSvc().CHAINCORE,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().chaincore,
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

export const MEMBERS_SVC = {
  provide: configService.getSvc().MEMBERS_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().memebers,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const TRANSLATES_SVC = {
    provide: configService.getSvc().TRANSLATES_SVC,
    useFactory: () =>
        ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [configService.getBrokerUri()],
                queue: configService.getQueue().translates,
                queueOptions: {
                    durable: true,
                    prefetchCount: 10,
                },
            },
        }),
};

export const RECAPTCHA_SVC = {
    provide: configService.getSvc().RECAPTCHA_SVC,
    useFactory: () =>
        ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [configService.getBrokerUri()],
                queue: configService.getQueue().recaptcha,
                queueOptions: {
                    durable: true,
                    prefetchCount: 10,
                },
            },
        }),
  };

export const MESSAGES_MEDIATOR_SVC = {
  provide: configService.getSvc().MESSAGES_MEDIATOR_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().messages_mediator,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const IP_INFO_SVC = {
  provide: configService.getSvc().IP_INFO_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().ip_info,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const VIRTUAL_CARD_SVC = {
  provide: configService.getSvc().VIRTUAL_CARD_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().virtual_card,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const BONUSES_SVC = {
  provide: configService.getSvc().BONUSES_SVC,
  useFactory: () =>
      ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
              urls: [configService.getBrokerUri()],
              queue: configService.getQueue().bonuses,
              queueOptions: {
                  durable: true,
                  prefetchCount: 10,
              },
          },
      }),
};

export const services = configService.getSvc();
