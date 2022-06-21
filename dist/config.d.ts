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
        'AUTH-BACK-OFFICE': string;
    };
    getQueue(): {
        auth: string;
        wl: string;
        baf: string;
        lot: string;
        rates: string;
        'auth-back-office': string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
