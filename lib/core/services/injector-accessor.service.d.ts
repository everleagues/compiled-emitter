import { Injector } from '@angular/core';
import { EmitStore } from './emit-store.service';
import * as i0 from "@angular/core";
export declare class InjectorAccessor {
    private static _injector;
    constructor(injector: Injector);
    static getEmitStore(): never | EmitStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<InjectorAccessor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InjectorAccessor>;
}
