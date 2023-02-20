declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        AUTH: string;
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
    };
    getQueue(): {
        auth: string;
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
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
