import { InjectorAccessor } from '../services/injector-accessor.service';
/**
 * @deprecated
 * Replace with ```ts inject(EmitStore).emitter({receiver}) ```.
 * Similar to what select is doing.
 * Read the deprecation notice at this link: https://ngxs.io/deprecations/select-decorator-deprecation.
 */
export function Emitter(receiver) {
    return (target, key) => {
        Object.defineProperty(target, key, {
            get: () => {
                const store = InjectorAccessor.getEmitStore();
                return store.emitter(receiver);
            }
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZW1pdHRlci9zcmMvbGliL2NvcmUvZGVjb3JhdG9ycy9lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXpFOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxRQUFrQjtJQUN4QyxPQUFPLENBQUMsTUFBYyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUM5QyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRyxFQUFFLEdBQUcsRUFBRTtnQkFDUixNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3JBY2Nlc3NvciB9IGZyb20gJy4uL3NlcnZpY2VzL2luamVjdG9yLWFjY2Vzc29yLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBSZXBsYWNlIHdpdGggYGBgdHMgaW5qZWN0KEVtaXRTdG9yZSkuZW1pdHRlcih7cmVjZWl2ZXJ9KSBgYGAuXG4gKiBTaW1pbGFyIHRvIHdoYXQgc2VsZWN0IGlzIGRvaW5nLlxuICogUmVhZCB0aGUgZGVwcmVjYXRpb24gbm90aWNlIGF0IHRoaXMgbGluazogaHR0cHM6Ly9uZ3hzLmlvL2RlcHJlY2F0aW9ucy9zZWxlY3QtZGVjb3JhdG9yLWRlcHJlY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRW1pdHRlcihyZWNlaXZlcjogRnVuY3Rpb24pOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBJbmplY3RvckFjY2Vzc29yLmdldEVtaXRTdG9yZSgpO1xuICAgICAgICByZXR1cm4gc3RvcmUuZW1pdHRlcihyZWNlaXZlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iXX0=