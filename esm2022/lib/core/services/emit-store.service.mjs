import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { flatten, getReceiverMetadata } from '../utils';
import { EmitterAction } from '../actions/actions';
import { constructEventsForSingleDispatching, constructEventsForManyDispatching } from '../internal/internals';
import * as i0 from "@angular/core";
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
export class EmitStore extends Store {
    emitter(receiver) {
        const metadata = getReceiverMetadata(receiver);
        if (NG_DEV_MODE && metadata == null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdC1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9lbWl0dGVyL3NyYy9saWIvY29yZS9zZXJ2aWNlcy9lbWl0LXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFHTCxtQ0FBbUMsRUFDbkMsaUNBQWlDLEVBQ2xDLE1BQU0sdUJBQXVCLENBQUM7O0FBSS9CLE1BQU0sV0FBVyxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUM7QUFHbEUsTUFBTSxPQUFPLFNBQVUsU0FBUSxLQUFLO0lBQ2xDLE9BQU8sQ0FBVyxRQUFrQjtRQUNsQyxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQyxJQUFJLFdBQVcsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FDYix1REFBdUQsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQ3pGLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLE9BQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBSSxRQUFRLEVBQUUsT0FBTyxDQUFDO1lBQ2hFLFFBQVEsRUFBRSxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBSSxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZSxDQUFJLFFBQTBCLEVBQUUsT0FBVTtRQUMvRCxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM1RCxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBRUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUU1QixJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsTUFBTSxxQkFBcUIsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxDQUFJLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0YsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLGFBQWEsQ0FBSSxRQUEwQixFQUFFLFFBQWE7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFFNUIsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7OEdBNUNVLFNBQVM7a0hBQVQsU0FBUzs7MkZBQVQsU0FBUztrQkFEckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmbGF0dGVuLCBnZXRSZWNlaXZlck1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBFbWl0dGVyQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBFbWl0dGFibGUsXHJcbiAgUmVjZWl2ZXJNZXRhRGF0YSxcclxuICBjb25zdHJ1Y3RFdmVudHNGb3JTaW5nbGVEaXNwYXRjaGluZyxcclxuICBjb25zdHJ1Y3RFdmVudHNGb3JNYW55RGlzcGF0Y2hpbmdcclxufSBmcm9tICcuLi9pbnRlcm5hbC9pbnRlcm5hbHMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuZ0Rldk1vZGU6IGJvb2xlYW47XHJcblxyXG5jb25zdCBOR19ERVZfTU9ERSA9IHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVtaXRTdG9yZSBleHRlbmRzIFN0b3JlIHtcclxuICBlbWl0dGVyPFQgPSB2b2lkPihyZWNlaXZlcjogRnVuY3Rpb24pOiBFbWl0dGFibGU8VD4ge1xyXG4gICAgY29uc3QgbWV0YWRhdGEgPSBnZXRSZWNlaXZlck1ldGFkYXRhKHJlY2VpdmVyKTtcclxuXHJcbiAgICBpZiAoTkdfREVWX01PREUgJiYgbWV0YWRhdGEgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYFN0YXRpYyBtZXRhZGF0YSBjYW5ub3QgYmUgZm91bmQsIGhhdmUgeW91IGRlY29yYXRlZCAke3JlY2VpdmVyLm5hbWV9IHdpdGggQFJlY2VpdmVyKCk/YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVtaXQ6IChwYXlsb2FkOiBUKSA9PiB0aGlzLl9kaXNwYXRjaFNpbmdsZTxUPihtZXRhZGF0YSwgcGF5bG9hZCksXHJcbiAgICAgIGVtaXRNYW55OiAocGF5bG9hZHM6IFRbXSkgPT4gdGhpcy5fZGlzcGF0Y2hNYW55PFQ+KG1ldGFkYXRhLCBwYXlsb2FkcylcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNwYXRjaFNpbmdsZTxUPihtZXRhZGF0YTogUmVjZWl2ZXJNZXRhRGF0YSwgcGF5bG9hZDogVCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgaWYgKHBheWxvYWQgPT09IHVuZGVmaW5lZCAmJiBtZXRhZGF0YS5wYXlsb2FkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGF5bG9hZCA9IG1ldGFkYXRhLnBheWxvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgY29uc3QgZmxhdHRlbmVkQ29uc3RydWN0b3JzID0gZmxhdHRlbihhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChjb25zdHJ1Y3RFdmVudHNGb3JTaW5nbGVEaXNwYXRjaGluZzxUPihmbGF0dGVuZWRDb25zdHJ1Y3RvcnMsIHBheWxvYWQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChuZXcgRW1pdHRlckFjdGlvbihwYXlsb2FkLCBtZXRhZGF0YS50eXBlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNwYXRjaE1hbnk8VD4obWV0YWRhdGE6IFJlY2VpdmVyTWV0YURhdGEsIHBheWxvYWRzOiBUW10pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXlsb2FkcykpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYWN0aW9uIH0gPSBtZXRhZGF0YTtcclxuXHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZENvbnN0cnVjdG9ycyA9IGZsYXR0ZW4oYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goY29uc3RydWN0RXZlbnRzRm9yTWFueURpc3BhdGNoaW5nKGZsYXR0ZW5lZENvbnN0cnVjdG9ycywgcGF5bG9hZHMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChwYXlsb2Fkcy5tYXAocGF5bG9hZCA9PiBuZXcgRW1pdHRlckFjdGlvbihwYXlsb2FkLCBtZXRhZGF0YS50eXBlKSkpO1xyXG4gIH1cclxufVxyXG4iXX0=