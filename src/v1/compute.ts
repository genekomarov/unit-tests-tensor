import calc from './calc';

export default function compute(elements: [number, number, number, number]): number {
    let result: number = 0;
    result += calc(7, 2, elements[0]);
    result += calc(7, 4, elements[1]);
    result += calc(7, 6, elements[2]);
    result += calc(7, 8, elements[3]);
    return result;
}

/**
 * ТЗ:
 * 1. Первый элемент - константа (передавать в конструктор).
 * 2. Второй элемент - каждую итерацию увеличивается на n. Передавать инкремента (в конструктор).
 * 3. Для проведения итерации расчетов вызывать метод класса.
 * 4. В конце вызывать метод класса destroy.
 */
