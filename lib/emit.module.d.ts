import { ModuleWithProviders } from '@angular/core';
import { InjectorAccessor } from './core/services/injector-accessor.service';
import * as i0 from "@angular/core";
export declare function withNgxsEmitPlugin(): import("@angular/core").EnvironmentProviders;
export declare class NgxsEmitPluginModule {
    constructor(_injectorAccessor: InjectorAccessor);
    static forRoot(): ModuleWithProviders<NgxsEmitPluginModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxsEmitPluginModule, [{ self: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxsEmitPluginModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxsEmitPluginModule>;
}
