import { Type } from '@angular/core';
import { StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
export declare const enum ActionStatus {
    Dispatched = "DISPATCHED",
    Successful = "SUCCESSFUL",
    Canceled = "CANCELED",
    Errored = "ERRORED"
}
export type Action<T> = Type<T> & {
    type: string;
};
export interface ReceiverMetaData<T extends Function = any> {
    type: string;
    payload: any;
    action: Action<T> | Action<T>[];
    cancelUncompleted: boolean;
}
export interface Emittable<T = void, U = any> {
    emit(payload: T): Observable<U>;
    emitMany(payloads: T[]): Observable<U>;
}
export interface ActionContext {
    status: ActionStatus;
    action: any;
    error?: Error;
}
export interface OfEmittableActionContext<T = void> {
    type: string;
    payload: T;
    error?: Error;
}
export interface Types {
    [key: string]: boolean;
}
export type ActionHandler = (ctx?: StateContext<any>, action?: any) => void | Observable<any>;
export declare const RECEIVER_META_KEY = "NGXS_RECEIVER_META";
export declare function constructEventsForSingleDispatching<T>(constructors: Type<any>[], payload: T | undefined): any;
export declare function constructEventsForManyDispatching<T>(constructors: Type<any>[], payloads: T[]): any;
