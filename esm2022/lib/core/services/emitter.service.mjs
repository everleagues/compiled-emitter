import { Injectable } from '@angular/core';
import { EmitStore } from './emit-store.service';
import * as i0 from "@angular/core";
import * as i1 from "./emit-store.service";
export class EmitterService {
    constructor(_emitStore) {
        this._emitStore = _emitStore;
    }
    action(receiver) {
        return this._emitStore.emitter(receiver);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService, deps: [{ token: i1.EmitStore }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: EmitterService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.EmitStore }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9lbWl0dGVyL3NyYy9saWIvY29yZS9zZXJ2aWNlcy9lbWl0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUlqRCxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO0lBQUcsQ0FBQztJQUU3QyxNQUFNLENBQW9CLFFBQWtCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs4R0FMVSxjQUFjO2tIQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtaXRTdG9yZSB9IGZyb20gJy4vZW1pdC1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtaXR0YWJsZSB9IGZyb20gJy4uL2ludGVybmFsL2ludGVybmFscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbWl0dGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VtaXRTdG9yZTogRW1pdFN0b3JlKSB7fVxuXG4gIGFjdGlvbjxUID0gdm9pZCwgVSA9IGFueT4ocmVjZWl2ZXI6IEZ1bmN0aW9uKTogRW1pdHRhYmxlPFQsIFU+IHtcbiAgICByZXR1cm4gdGhpcy5fZW1pdFN0b3JlLmVtaXR0ZXIocmVjZWl2ZXIpO1xuICB9XG59XG4iXX0=