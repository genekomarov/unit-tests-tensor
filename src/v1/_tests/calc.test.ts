import 'mocha';
import {assert} from 'chai';

import calc from '../calc';

/**
 * Проблемы:
 * 1. Все ассерты запускать в одном или разны блоках it
 * 2. Параметрическое формирование названия теста.
 */

describe('calc', () => {
    it('Вызываем с разными параметрами', () => {
        assert.equal(calc(1, 2, 3), 6);
        assert.equal(calc(2, 3, 4), 9);
        assert.equal(calc(3, 4, 5), 12);
        assert.equal(calc(4, 5, 6), 15);
    });

    it('Что-то проверяем', () => {
        assert.equal(calc(1, 2, 3), 6);
    });

    it('Складываем 1, 2, 3. Ожидаем 6', () => {
        assert.equal(calc(1, 2, 3), 6);
    });

    let a = 1;
    let b = 2;
    let c = 3;
    let exp = 6;
    it(`Складываем ${a}, ${b}, ${c}. Ожидаем ${exp}`, () => {
        console.log(`${a}, ${b}, ${c}, ${exp}`);
        assert.equal(calc(a, b, c), exp);
    });

    a = 2;
    b = 3;
    c = 4;
    exp = 9;
    it(`Складываем ${a}, ${b}, ${c}. Ожидаем ${exp}`, () => {
        console.log(`${a}, ${b}, ${c}, ${exp}`);
        assert.equal(calc(a, b, c), exp);
    });

    let params = {
        a: 1,
        b: 2,
        c: 3,
        exp: 6
    };
    it(`Складываем ${params.a}, ${params.b}, ${params.c}. Ожидаем ${params.exp}`, () => {
        console.log(`${params.a}, ${params.b}, ${params.c}, ${params.exp}`);
        assert.equal(calc(a, b, c), exp);
    });

    params.a = 2;
    params.b = 3;
    params.c = 4;
    params.exp = 9
    it(`Складываем ${params.a}, ${params.b}, ${params.c}. Ожидаем ${params.exp}`, () => {
        console.log(`${params.a}, ${params.b}, ${params.c}, ${params.exp}`);
        assert.equal(calc(a, b, c), exp);
    });
});
