import 'mocha';
import {assert} from 'chai';

import calc from '../calc';

/*** Тестирование чистых функций. */

describe('calc', () => {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Запуск всех проверок в одном блоке it.
    // it('Вызываем с разными параметрами', () => {
    //     assert.equal(calc(1, 2, 3), 6);
    //     assert.equal(calc(2, 3, 4), 9);
    //     assert.equal(calc(3, 4, 5), 12);
    //     assert.equal(calc(4, 5, 6), 15);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Каждая проверка в отдельном блоке it.
    // it('Что-то проверяем', () => {
    //     assert.equal(calc(1, 2, 3), 6);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Как формировать названия тестов.
    // it('Складываем 1, 2, 3. Ожидаем 6', () => {
    //     assert.equal(calc(1, 2, 3), 6);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Параметрическое формирование названия теста. Примитивы.
    // Вопрос: что будет выведено в названии теста и что будет протестировано?
    // let a = 1;
    // let b = 2;
    // let c = 3;
    // let exp = 6;
    // it(`Складываем ${a}, ${b}, ${c}. Ожидаем ${exp}`, () => {
    //     console.log(`${a}, ${b}, ${c}, ${exp}`);
    //     assert.equal(calc(a, b, c), exp);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // a = 2;
    // b = 3;
    // c = 4;
    // exp = 9;
    // it(`Складываем ${a}, ${b}, ${c}. Ожидаем ${exp}`, () => {
    //     console.log(`${a}, ${b}, ${c}, ${exp}`);
    //     assert.equal(calc(a, b, c), exp);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Параметрическое формирование названия теста. Объекты.
    // Вопрос: что будет выведено в названии теста и что будет протестировано?
    // let params = {
    //     a: 1,
    //     b: 2,
    //     c: 3,
    //     exp: 6
    // };
    // it(`Складываем ${params.a}, ${params.b}, ${params.c}. Ожидаем ${params.exp}`, () => {
    //     console.log(`${params.a}, ${params.b}, ${params.c}, ${params.exp}`);
    //     assert.equal(calc(a, b, c), exp);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // params.a = 2;
    // params.b = 3;
    // params.c = 4;
    // params.exp = 9
    // it(`Складываем ${params.a}, ${params.b}, ${params.c}. Ожидаем ${params.exp}`, () => {
    //     console.log(`${params.a}, ${params.b}, ${params.c}, ${params.exp}`);
    //     assert.equal(calc(a, b, c), exp);
    // });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
