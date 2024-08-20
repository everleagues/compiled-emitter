/**
 * This class is used as a default action when
 * the user doesn't pass any custom action as an argument
 */
export declare class EmitterAction<T = void> {
    readonly payload: T;
    readonly type: string | null;
    constructor(payload: T, type?: string | null);
}
