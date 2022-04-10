import Calc from './Calc';

const FIRST_ARG: number = 7;
const INC: number = 2;

export default function compute(elements: number[]): number {
    const calc = new Calc(FIRST_ARG, INC);
    let result: number = 0;
    elements.forEach((element) => {
        result += calc.sum(element);
    });
    calc.destroy();
    return result;
}
