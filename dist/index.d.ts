export declare const AUTH_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const services: {
    AUTH: string;
};
