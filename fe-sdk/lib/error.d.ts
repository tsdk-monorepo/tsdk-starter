/** TSDK Base Error */
export declare class TSDKError extends Error {
}
/**
 * Before call, not set handler instance error
 */
export declare class NoHandlerError extends TSDKError {
}
/**
 * Timeout error
 */
export declare class TimeoutError extends TSDKError {
}
/**
 * No connection error
 */
export declare class NoConnectionError extends TSDKError {
}
