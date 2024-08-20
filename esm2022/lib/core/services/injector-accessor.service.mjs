import { Injectable, Injector } from '@angular/core';
import { EmitStore } from './emit-store.service';
import * as i0 from "@angular/core";
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
class NgxsEmitPluginModuleIsNotImported extends Error {
    constructor() {
        super(`You've forgotten to import \`NgxsEmitPluginModule\``);
    }
}
export class InjectorAccessor {
    static { this._injector = null; }
    constructor(injector) {
        InjectorAccessor._injector = injector;
    }
    static getEmitStore() {
        if (NG_DEV_MODE && this._injector === null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZW1pdHRlci9zcmMvbGliL2NvcmUvc2VydmljZXMvaW5qZWN0b3ItYWNjZXNzb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBSWpELE1BQU0sV0FBVyxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUM7QUFFbEUsTUFBTSxpQ0FBa0MsU0FBUSxLQUFLO0lBQ25EO1FBQ0UsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLGdCQUFnQjthQUNaLGNBQVMsR0FBb0IsSUFBSSxBQUF4QixDQUF5QjtJQUVqRCxZQUFZLFFBQWtCO1FBQzVCLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZO1FBQ2pCLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxJQUFJLGlDQUFpQyxFQUFFLENBQUM7UUFDaEQsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVUsQ0FBQyxHQUFHLENBQVksU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs4R0FiVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFbWl0U3RvcmUgfSBmcm9tICcuL2VtaXQtc3RvcmUuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IG5nRGV2TW9kZTogYm9vbGVhbjtcclxuXHJcbmNvbnN0IE5HX0RFVl9NT0RFID0gdHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlO1xyXG5cclxuY2xhc3MgTmd4c0VtaXRQbHVnaW5Nb2R1bGVJc05vdEltcG9ydGVkIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoYFlvdSd2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IFxcYE5neHNFbWl0UGx1Z2luTW9kdWxlXFxgYCk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvckFjY2Vzc29yIHtcclxuICBwcml2YXRlIHN0YXRpYyBfaW5qZWN0b3I6IEluamVjdG9yIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgSW5qZWN0b3JBY2Nlc3Nvci5faW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRFbWl0U3RvcmUoKTogbmV2ZXIgfCBFbWl0U3RvcmUge1xyXG4gICAgaWYgKE5HX0RFVl9NT0RFICYmIHRoaXMuX2luamVjdG9yID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBOZ3hzRW1pdFBsdWdpbk1vZHVsZUlzTm90SW1wb3J0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5qZWN0b3IhLmdldDxFbWl0U3RvcmU+KEVtaXRTdG9yZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==