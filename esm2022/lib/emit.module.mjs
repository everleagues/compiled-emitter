import { NgModule, Self, makeEnvironmentProviders } from '@angular/core';
import { EmitStore } from './core/services/emit-store.service';
import { EmitterService } from './core/services/emitter.service';
import { InjectorAccessor } from './core/services/injector-accessor.service';
import * as i0 from "@angular/core";
import * as i1 from "./core/services/injector-accessor.service";
export function withNgxsEmitPlugin() {
    return makeEnvironmentProviders([EmitStore, EmitterService, InjectorAccessor]);
}
export class NgxsEmitPluginModule {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(_injectorAccessor) { }
    static forRoot() {
        return {
            ngModule: NgxsEmitPluginModule,
            providers: [EmitStore, EmitterService, InjectorAccessor]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule, deps: [{ token: i1.InjectorAccessor, self: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: NgxsEmitPluginModule, decorators: [{
            type: NgModule
        }], ctorParameters: () => [{ type: i1.InjectorAccessor, decorators: [{
                    type: Self
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL2VtaXR0ZXIvc3JjL2xpYi9lbWl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixJQUFJLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBRTdFLE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFHRCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLGdFQUFnRTtJQUNoRSxZQUFvQixpQkFBbUMsSUFBRyxDQUFDO0lBRTNELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztTQUN6RCxDQUFDO0lBQ0osQ0FBQzs4R0FUVSxvQkFBb0I7K0dBQXBCLG9CQUFvQjsrR0FBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQURoQyxRQUFROzswQkFHTSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNlbGYsIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRW1pdFN0b3JlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2VtaXQtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2VtaXR0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdG9yQWNjZXNzb3IgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aE5neHNFbWl0UGx1Z2luKCkge1xyXG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoW0VtaXRTdG9yZSwgRW1pdHRlclNlcnZpY2UsIEluamVjdG9yQWNjZXNzb3JdKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKClcclxuZXhwb3J0IGNsYXNzIE5neHNFbWl0UGx1Z2luTW9kdWxlIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXHJcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBfaW5qZWN0b3JBY2Nlc3NvcjogSW5qZWN0b3JBY2Nlc3Nvcikge31cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hzRW1pdFBsdWdpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neHNFbWl0UGx1Z2luTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtFbWl0U3RvcmUsIEVtaXR0ZXJTZXJ2aWNlLCBJbmplY3RvckFjY2Vzc29yXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19