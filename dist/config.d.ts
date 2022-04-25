declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        AUTH: string;
        WL: string;
    };
    getQueue(): {
        auth: string;
        wl: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
