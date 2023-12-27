import { ObjectLiteral } from './tsdk-types';
export * from './tsdk-types';
export declare const hasBodyMethods: {
    [key: string]: boolean | undefined;
};
export declare function checkMethodHasBody(method: string): boolean | undefined;
export declare function transformPath(path: string): string;
export declare function isObject<T = any>(data: T): boolean;
/**
 * remove undefined field or trim string value
 *
 * @param data - the object data
 */
export declare const trimAndRemoveUndefined: (data: ObjectLiteral) => ObjectLiteral;
export declare const ProtocolTypes: {
    request: string;
    response: string;
    set: string;
};
