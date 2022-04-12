import 'mocha';

type ITestResult = unknown | Promise<unknown>;

/**
 * Регистрирует тестовый сценарий.
 * @remark Функция имеет сайдэффект! Перед запуском сценария объекты, переданные в data и tests будут заморожены!
 */
export function registerScenario<D, T>(data: D, tests: T, scenario: (data: D, tests: T) => void): void {
    Object.freeze(data);
    Object.freeze(tests);
    scenario(data, tests);
}

/**
 * Создает функцию для запуска теста.
 * @description
 * Используется для создания однотипных тестовых функций через указание фиксированных входных параметров.
 * Функция, созданная через этот метод также обладают однотипным фиксированным набором параметров для запуска теста.
 */
export function createTest<State, Opts, Exp>(
    name: string,
    body: (state: State, opts: Opts, exp: Exp) => ITestResult
): (
    subName: string,
    state: State,
    opts: Opts,
    exp: Exp
) => ITestResult {
    return (
        subName: string,
        state: State,
        opts: Opts,
        exp: Exp
    ): void => {
        it(name + ' ' + subName, () => {
            return body(state, opts, exp);
        });
    };
}
