import { ObjectLiteral } from './shared/tsdk-types';
export declare function pathParams(path: string, data: ObjectLiteral, symbol: ':' | '{}'): string;
/** parse /:a/:b -> [{name: 'a', symbol: ':'},{name: 'b', symbol: ':'},] */
export declare function parseParams(path: string): {
    name: string;
    symbol: string;
}[];
/** parse /{a}/{b} -> [{name: 'a', symbol: '{'},{name: 'b', symbol: '{'},] */
export declare function parseBracesParams(path: string): {
    name: string;
    symbol: string;
}[];
