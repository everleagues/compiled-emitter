import { OperatorFunction } from 'rxjs';
import { ActionStatus, OfEmittableActionContext, Types } from '../internal/internals';
export declare function ofEmittableDispatched(...receivers: Function[]): OperatorFunction<any, OfEmittableActionContext<any>>;
export declare function ofEmittableSuccessful(...receivers: Function[]): OperatorFunction<any, OfEmittableActionContext<any>>;
export declare function ofEmittableCanceled(...receivers: Function[]): OperatorFunction<any, OfEmittableActionContext<any>>;
export declare function ofEmittableErrored(...receivers: Function[]): OperatorFunction<any, OfEmittableActionContext<any>>;
export declare function ofEmittable(types: Types, status: ActionStatus): OperatorFunction<any, OfEmittableActionContext<any>>;
