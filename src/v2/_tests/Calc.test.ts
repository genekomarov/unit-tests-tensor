import 'mocha';
import {assert} from 'chai';

import Calc from '../Calc';

interface IState {
    instance: Calc
}

const data = {
    firstArg: 7,
    inc: 2,
    thirdArgs: [1, 2, 3, 4],
    results: [10, 13, 16, 19],
    noOkThirdArg: 5
};

const bigTests = {
    sum: (
        opts: {
            firstArg: number,
            inc: number,
            thirdArgs: number[],
            noOkThirdArg: number
        },
        exp: {
            results: number[]
        }      
    ) => {
        const {firstArg, inc, thirdArgs, noOkThirdArg} = opts;

        const calc = new Calc(firstArg, inc);
        
        thirdArgs.forEach((thirdArg, index) => {
            assert.equal(calc.sum(thirdArg), exp.results[index]);
        });
        
        calc.destroy();
        assert.equal(calc.sum(noOkThirdArg), undefined);
    },

    mult: (
        opts: {
            firstArg: number,
            inc: number,
            thirdArgs: number[],
            noOkThirdArg: number
        },
        exp: {
            results: number[]
        }      
    ) => {
        const {firstArg, inc, thirdArgs, noOkThirdArg} = opts;

        const calc = new Calc(firstArg, inc);
        
        thirdArgs.forEach((thirdArg, index) => {
            assert.equal(calc.mult(thirdArg), exp.results[index]);
        });
        
        calc.destroy();
        assert.equal(calc.mult(noOkThirdArg), undefined);
    }
};

const atomicTests = {
    create: (
        state: IState,
        opts: {
            firstArg: number,
            inc: number,
        },
        exp: {}
    ) => {
        it('create', () => {
            const {firstArg, inc} = opts;
            state.instance = new Calc(firstArg, inc);
        });
    },

    sum: (
        state: IState,
        opts: {
            thirdArg: number,
        },
        exp: {
            result: number
        }
    ) => {
        it('sum', () => {
            const {thirdArg} = opts;
            assert.equal(state.instance.sum(thirdArg), exp.result);
        });
    },

    destroy: (
        state: IState,
        opts: {
            noOkThirdArg: number
        },
        exp: {
        }
    ) => {
        it('destroy', () => {
            const {noOkThirdArg} = opts;
            state.instance.destroy();
            assert.equal(state.instance.sum(noOkThirdArg), undefined);
            assert.equal(state.instance.mult(noOkThirdArg), undefined);
        });
    }
};

describe('Calc', () => {
    it('Проверяем сложение- 1', () => {
        const calc = new Calc(7, 2);
        assert.equal(calc.sum(1), 10);
        assert.equal(calc.sum(2), 13);
        assert.equal(calc.sum(3), 16);
        assert.equal(calc.sum(4), 19);
        calc.destroy();
        assert.equal(calc.sum(5), undefined);
    });

    it('Проверяем сложение- 2', () => {
        const calc = new Calc(7, 2);
        assert.equal(calc.sum(2), 11);
        assert.equal(calc.sum(3), 14);
        assert.equal(calc.sum(4), 17);
        assert.equal(calc.sum(5), 20);
        calc.destroy();
        assert.equal(calc.sum(6), undefined);
    });

    it('Проверяем сложение- 3', () => {
        const calc = new Calc(8, 2);
        assert.equal(calc.sum(1), 11);
        assert.equal(calc.sum(2), 14);
        assert.equal(calc.sum(3), 17);
        assert.equal(calc.sum(4), 20);
        calc.destroy();
        assert.equal(calc.sum(5), undefined);
    });

    it('Проверяем сложение- 4', () => {
        const calc = new Calc(8, 2);
        assert.equal(calc.sum(2), 12);
        assert.equal(calc.sum(3), 15);
        assert.equal(calc.sum(4), 18);
        assert.equal(calc.sum(5), 21);
        calc.destroy();
        assert.equal(calc.sum(6), undefined);
    });

    it('Проверяем сложение- 1.1', () => {
        bigTests.sum({
            firstArg: 7,
            inc: 2,
            thirdArgs: [1, 2, 3, 4],
            noOkThirdArg: 5
        }, {
            results: [10, 13, 16, 19]
        });
    });

    it('Проверяем умножение- 2.1', () => {
        bigTests.mult({
            firstArg: 7,
            inc: 2,
            thirdArgs: [1, 2, 3, 4],
            noOkThirdArg: 5
        }, {
            results: [14, 56, 126, 224]
        });
    });

    const state: IState = {
        instance: undefined
    };

    atomicTests.create(state, {
        firstArg: data.firstArg,
        inc: data.inc
    }, {});

    data.thirdArgs.forEach((thirdArg, index) => {
        atomicTests.sum(state, {thirdArg}, {result: data.results[index]});
    });

    atomicTests.destroy(state, {noOkThirdArg: data.noOkThirdArg}, {});
});