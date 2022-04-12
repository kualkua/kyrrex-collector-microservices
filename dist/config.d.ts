declare class ConfigService {
    private env;
    constructor(env: string | undefined);
    getBrokerUri(): string;
    getSvc(): {
        AUTH: string;
    };
    getQueue(): {
        auth: string;
    };
    getEnv(): string;
}
declare const configService: ConfigService;
export { configService };
