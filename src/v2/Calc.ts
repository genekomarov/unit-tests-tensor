export default class Calc {
    
    private readonly _firstArg: number;
    private readonly _inc: number;

    private _secondArg: number = 0;

    private _isDestroyed: boolean = false;
    
    constructor(firstArg: number, inc: number) {
        this._firstArg = firstArg;
        this._inc = inc;
    }

    calc(thirdArg: number): number {
        if (this._isDestroyed) {
            console.error('[Calc]: [calc] Задестроен!');
            return;
        }
        this._secondArg += this._inc;
        return this._firstArg + this._secondArg + thirdArg;
    };

    destroy(): void {
        this._isDestroyed = true;
    }
}