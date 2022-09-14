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
        REFRESHES: string;
    };
    getQueue(): {
        auth: string;
        static: string;
        wl: string;
        baf: string;
        lot: string;
        rates: string;
        wl_baf: string;
        'auth-back-office': string;
        mailer: string;
        refreshes: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
