export declare const AUTH_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const WL_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const BAF_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const LOT_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const RATES_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const STATIC_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const AUTH_BACK_OFFICE_SVC: {
    provide: string;
    useFactory: () => import("@nestjs/microservices").ClientProxy & import("@nestjs/microservices").Closeable;
};
export declare const services: {
    AUTH: string;
    WL: string;
    BAF: string;
    LOT: string;
    RATES: string;
    STATIC: string;
    'AUTH-BACK-OFFICE': string;
};
