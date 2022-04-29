declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        AUTH: string;
        WL: string;
        BAF: string;
        LOT: string;
    };
    getQueue(): {
        auth: string;
        wl: string;
        baf: string;
        lot: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
