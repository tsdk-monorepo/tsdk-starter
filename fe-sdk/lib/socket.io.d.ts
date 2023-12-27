import type { Socket } from 'socket.io-client';
import { APIConfig, ObjectLiteral } from './shared/tsdk-helper';
/**
 * Set the io instance
 *
 * @example
 * ```ts
  const socket = io('https://server-domain.com', {
    transports: ['websocket'],
  });
  setSocketIOInstance(socket);
  ```
 *
 * @param instance - io
 */
export declare const setSocketIOInstance: (instance: Socket) => void;
/**
 * Get socket.io-client instance
 *
 * @param instance - socekt.io-client instance
 * @returns The io
 */
export declare const getSocketIOInstance: () => Socket;
export declare function socketIOHandler(apiConfig: APIConfig, data: any, requestConfig?: ObjectLiteral & {
    timeout?: number;
}, needTrim?: boolean): Promise<any>;
