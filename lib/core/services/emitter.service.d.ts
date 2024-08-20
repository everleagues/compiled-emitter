import { EmitStore } from './emit-store.service';
import { Emittable } from '../internal/internals';
import * as i0 from "@angular/core";
export declare class EmitterService {
    private _emitStore;
    constructor(_emitStore: EmitStore);
    action<T = void, U = any>(receiver: Function): Emittable<T, U>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmitterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmitterService>;
}
