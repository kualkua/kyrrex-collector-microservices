declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        AUTH: string;
        COLLECTOR_GATEWAY_SVC: string;
        TRANSACTIONS_MONITORING: string;
        WL_TRANSACTIONS_MONITORING: string;
        LAUNCHPAD: string;
        WL: string;
        BAF: string;
        LOT: string;
        RATES: string;
        STATIC: string;
        WL_BAF: string;
        'AUTH-BACK-OFFICE': string;
        MAILER: string;
        USERS_ACTIONS_LOGGER: string;
        PAYMENTS: string;
        CHAINCORE: string;
        REFRESHES: string;
        MEDIATOR_SVC: string;
        MEMBERS_SVC: string;
        TRANSLATES_SVC: string;
        RECAPTCHA_SVC: string;
        MESSAGES_MEDIATOR_SVC: string;
        IP_INFO_SVC: string;
        VIRTUAL_CARD_SVC: string;
    };
    getQueue(): {
        auth: string;
        collector_gateway: string;
        transactions_monitoring: string;
        wl_transactions_monitoring: string;
        launchpad: string;
        static: string;
        wl: string;
        baf: string;
        lot: string;
        rates: string;
        wl_baf: string;
        users_actions_logger: string;
        'auth-back-office': string;
        mailer: string;
        payments: string;
        chaincore: string;
        refreshes: string;
        mediator: string;
        memebers: string;
        translates: string;
        recaptcha: string;
        messages_mediator: string;
        ip_info: string;
        virtual_card: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
