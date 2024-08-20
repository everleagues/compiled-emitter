import { Store } from '@ngxs/store';
import { Emittable } from '../internal/internals';
import * as i0 from "@angular/core";
export declare class EmitStore extends Store {
    emitter<T = void>(receiver: Function): Emittable<T>;
    private _dispatchSingle;
    private _dispatchMany;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmitStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmitStore>;
}
