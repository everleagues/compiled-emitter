import * as i0 from '@angular/core';
import { Injectable, makeEnvironmentProviders, NgModule, Self } from '@angular/core';
import { Store, getActionTypeFromInstance } from '@ngxs/store';
import { ɵensureStoreMetadata as _ensureStoreMetadata } from '@ngxs/store/internals';
import { filter, map } from 'rxjs/operators';

const RECEIVER_META_KEY = 'NGXS_RECEIVER_META';
function constructEventsForSingleDispatching(constructors, payload) {
    return constructors.map(constructor => Reflect.construct(constructor, [payload]));
}
function constructEventsForManyDispatching(constructors, payloads) {
    const events = [];
    for (const constructor of constructors) {
        for (const payload of payloads) {
            events.push(Reflect.construct(constructor, [payload]));
        }
    }
    return events;
}

function flatten(flattenable) {
    return Array.isArray(flattenable) ? flattenable : [flattenable];
}
function getReceiverMetadata(receiver) {
    return receiver[RECEIVER_META_KEY];
}

/**
 * This class is used as a default action when
 * the user doesn't pass any custom action as an argument
 */
class EmitterAction {
    constructor(payload, type = null) {
        this.payload = payload;
        this.type = type;
    }
}

const NG_DEV_MODE$3 = typeof ngDevMode === 'undefined' || ngDevMode;
class EmitStore extends Store {
    emitter(receiver) {
        const metadata = getReceiverMetadata(receiver);
        if (NG_DEV_MODE$3 && metadata == null) {
            throw new Error(`Static metadata cannot be found, have you decorated ${receiver.name} with @Receiver()?`);
        }
        return {
            emit: (payload) => this._dispatchSingle(metadata, payload),
            emitMany: (payloads) => this._dispatchMany(metadata, payloads)
        };
    }
    _dispatchSingle(metadata, payload) {
        if (payload === undefined && metadata.payload !== undefined) {
            payload = metadata.payload;
        }
        const { action } = metadata;
        if (action) {
            const flattenedConstructors = flatten(action);
            return this.dispatch(constructEventsForSingleDispatching(flattenedConstructors, payload));
        }
        return this.dispatch(new EmitterAction(payload, metadata.type));
    }
    _dispatchMany(metadata, payloads) {
        if (!Array.isArray(payloads)) {
            return this.dispatch([]);
        }
        const { action } = metadata;
        if (action) {
            const flattenedConstructors = flatten(action);
            return this.dispatch(constructEventsForManyDispatching(flattenedConstructors, payloads));
        }
        return this.dispatch(payloads.map(payload => new EmitterAction(payload, metadata.type)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitStore, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitStore }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitStore, decorators: [{
            type: Injectable
        }] });

function generateHash() {
    return (Math.random() * Date.now()).toString(36).slice(0, 8);
}
function getActionProperties(options, target, key) {
    const defaultProperties = {
        type: `[ID:${generateHash()}] ${target.name}.${key}`,
        payload: undefined,
        action: undefined,
        cancelUncompleted: true
    };
    if (options == null) {
        return defaultProperties;
    }
    const { type, payload, action, cancelUncompleted } = options;
    if (type) {
        defaultProperties.type = type;
    }
    if (payload) {
        defaultProperties.payload = payload;
    }
    if (action) {
        defaultProperties.action = action;
        if (!Array.isArray(action)) {
            defaultProperties.type = action.type;
        }
    }
    if (typeof cancelUncompleted === 'boolean') {
        defaultProperties.cancelUncompleted = cancelUncompleted;
    }
    return defaultProperties;
}
const NG_DEV_MODE$2 = typeof ngDevMode === 'undefined' || ngDevMode;
function Receiver(options) {
    return (target, key, descriptor) => {
        if (NG_DEV_MODE$2) {
            const isNotFunctionOrNotStatic = target.prototype == null || descriptor == null || typeof target[key] !== 'function';
            if (isNotFunctionOrNotStatic) {
                throw new TypeError(`Only static functions can be decorated with @Receiver() decorator`);
            }
            const reservedKeyAlreadyExists = key in target.prototype;
            if (reservedKeyAlreadyExists) {
                throw new Error(`Property with name \`${key.toString()}\` already exists, please rename to avoid conflicts`);
            }
        }
        if (typeof key !== 'string') {
            key = String(key);
        }
        const meta = _ensureStoreMetadata(target);
        const { type, payload, action, cancelUncompleted } = getActionProperties(options, target, key);
        if (NG_DEV_MODE$2 && Object.prototype.hasOwnProperty.call(meta.actions, type)) {
            throw new Error(`Method decorated with such type \`${type}\` already exists`);
        }
        if (Array.isArray(action)) {
            for (const { type } of action) {
                meta.actions[type] = [
                    {
                        fn: `${key}`,
                        options: { cancelUncompleted },
                        type
                    }
                ];
            }
        }
        else {
            meta.actions[type] = [
                {
                    fn: `${key}`,
                    options: { cancelUncompleted },
                    type
                }
            ];
        }
        descriptor.value[RECEIVER_META_KEY] = {
            type,
            action,
            payload
        };
        target.prototype[key] = function (ctx, action) {
            return target[key].call(target, ctx, action);
        };
    };
}

const NG_DEV_MODE$1 = typeof ngDevMode === 'undefined' || ngDevMode;
class NgxsEmitPluginModuleIsNotImported extends Error {
    constructor() {
        super(`You've forgotten to import \`NgxsEmitPluginModule\``);
    }
}
class InjectorAccessor {
    static { this._injector = null; }
    constructor(injector) {
        InjectorAccessor._injector = injector;
    }
    static getEmitStore() {
        if (NG_DEV_MODE$1 && this._injector === null) {
            throw new NgxsEmitPluginModuleIsNotImported();
        }
        return this._injector.get(EmitStore);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: InjectorAccessor, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: InjectorAccessor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: InjectorAccessor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }] });

/**
 * @deprecated
 * Replace with ```ts inject(EmitStore).emitter({receiver}) ```.
 * Similar to what select is doing.
 * Read the deprecation notice at this link: https://ngxs.io/deprecations/select-decorator-deprecation.
 */
function Emitter(receiver) {
    return (target, key) => {
        Object.defineProperty(target, key, {
            get: () => {
                const store = InjectorAccessor.getEmitStore();
                return store.emitter(receiver);
            }
        });
    };
}

class EmitterService {
    constructor(_emitStore) {
        this._emitStore = _emitStore;
    }
    action(receiver) {
        return this._emitStore.emitter(receiver);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService, deps: [{ token: EmitStore }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: EmitStore }] });

function withNgxsEmitPlugin() {
    return makeEnvironmentProviders([EmitStore, EmitterService, InjectorAccessor]);
}
class NgxsEmitPluginModule {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(_injectorAccessor) { }
    static forRoot() {
        return {
            ngModule: NgxsEmitPluginModule,
            providers: [EmitStore, EmitterService, InjectorAccessor]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule, deps: [{ token: InjectorAccessor, self: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule, decorators: [{
            type: NgModule
        }], ctorParameters: () => [{ type: InjectorAccessor, decorators: [{
                    type: Self
                }] }] });

const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
/**
 * `getReceiverTypes([CounterState.increment, CounterState.decrement])`
 * will return a hashmap => `{ 'CounterState.increment': true, 'CounterState.decrement': true }`
 */
function getReceiverTypes(receivers) {
    const types = {};
    for (const receiver of receivers) {
        if (NG_DEV_MODE && typeof receiver !== 'function') {
            throw new TypeError(`Receiver should be a function, got ${receiver}`);
        }
        const metadata = getReceiverMetadata(receiver);
        if (NG_DEV_MODE && (metadata == null || metadata.type == null)) {
            throw new Error(`${receiver.name} should be decorated with @Receiver() decorator`);
        }
        types[metadata.type] = true;
    }
    return types;
}
function ofEmittableDispatched(...receivers) {
    return ofEmittable(getReceiverTypes(receivers), "DISPATCHED" /* ActionStatus.Dispatched */);
}
function ofEmittableSuccessful(...receivers) {
    return ofEmittable(getReceiverTypes(receivers), "SUCCESSFUL" /* ActionStatus.Successful */);
}
function ofEmittableCanceled(...receivers) {
    return ofEmittable(getReceiverTypes(receivers), "CANCELED" /* ActionStatus.Canceled */);
}
function ofEmittableErrored(...receivers) {
    return ofEmittable(getReceiverTypes(receivers), "ERRORED" /* ActionStatus.Errored */);
}
function ofEmittable(types, status) {
    return source => source.pipe(filter((ctx) => {
        const type = getActionTypeFromInstance(ctx.action);
        const hashMapHasType = !!types[type];
        const contextHasTransmittedStatus = ctx.status === status;
        return hashMapHasType && contextHasTransmittedStatus;
    }), map(({ action, error }) => ({
        error,
        type: getActionTypeFromInstance(action),
        payload: action.payload
    })));
}

/**
 * Generated bundle index. Do not edit.
 */

export { EmitStore, Emitter, EmitterAction, EmitterService, NgxsEmitPluginModule, Receiver, ofEmittableCanceled, ofEmittableDispatched, ofEmittableErrored, ofEmittableSuccessful, withNgxsEmitPlugin };
//# sourceMappingURL=ngxs-labs-emitter.mjs.map
