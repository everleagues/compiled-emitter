import { ReceiverMetaData } from '../internal/internals';
export declare function flatten<T>(flattenable: T | T[]): T[];
export declare function getReceiverMetadata(receiver: Function): ReceiverMetaData;
