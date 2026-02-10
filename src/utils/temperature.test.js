const { toCelsius, toFahrenheit, movingAverage } = require('./temperature.js');

// Pruebas para la función toCelsius - Luis Sagnay
describe('pasar de farenheit a celsius - Luis Sagnay', () => {
    test('convierte 32°F a 0.0°C', () => {
        expect(toCelsius(32)).toBe(0.0);
    });

    test('convierte -40°F a -40.0°C', () => {
        expect(toCelsius(-40)).toBe(-40.0);
    });

    test('convierte 212°F a 100.0°C', () => {
        expect(toCelsius(212)).toBe(100.0);
    });

    test('lanza TypeError si f no es un número', () => {
        expect(() => toCelsius('32')).toThrow(TypeError);
        expect(() => toCelsius(null)).toThrow(TypeError);
        expect(() => toCelsius(undefined)).toThrow(TypeError);
    });

    test('lanza TypeError si f es NaN', () => {
        expect(() => toCelsius(NaN)).toThrow(TypeError);
    });

    test('lanza TypeError si f es Infinity', () => {
        expect(() => toCelsius(Infinity)).toThrow(TypeError);
        expect(() => toCelsius(-Infinity)).toThrow(TypeError);
    });
});

// Pruebas para la función toFahrenheit - Luis Sagnay
describe('pasar de celsius a fahrenheit - Luis Sagnay', () => {
    test('convierte 0°C a 32.0°F', () => {
        expect(toFahrenheit(0)).toBe(32.0);
    });

    test('convierte 100°C a 212.0°F', () => {
        expect(toFahrenheit(100)).toBe(212.0);
    });

    test('convierte -40°C a -40.0°F', () => {
        expect(toFahrenheit(-40)).toBe(-40.0);
    });


    test('lanza TypeError si c no es un número', () => {
        expect(() => toFahrenheit('0')).toThrow(TypeError);
        expect(() => toFahrenheit(null)).toThrow(TypeError);
        expect(() => toFahrenheit(undefined)).toThrow(TypeError);
    });

    test('lanza TypeError si c es NaN', () => {
        expect(() => toFahrenheit(NaN)).toThrow(TypeError);
    });

    test('lanza TypeError si c es Infinity', () => {
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
        expect(() => toFahrenheit(-Infinity)).toThrow(TypeError);
    });
});

// Pruebas para la función movingAverage - Luis Sagnay
describe('funcion de mover el promedio - Luis Sagnay', () => {
    test('calcula media móvil con window=2: [10,20,30,40] → [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });

    test('calcula media móvil con window=3: [10,20,30,40,50]', () => {
        expect(movingAverage([10, 20, 30, 40, 50], 3)).toEqual([20.00, 30.00, 40.00]);
    });


    test('lanza TypeError si series no es un arreglo', () => {
        expect(() => movingAverage('texto', 2)).toThrow(TypeError);
        expect(() => movingAverage(123, 2)).toThrow(TypeError);
        expect(() => movingAverage(null, 2)).toThrow(TypeError);
    });

    test('lanza TypeError si window no es un número entero', () => {
        expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(TypeError);
        expect(() => movingAverage([1, 2, 3], '2')).toThrow(TypeError);
    });

    test('lanza RangeError si window < 2', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], 0)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], -1)).toThrow(RangeError);
    });

    test('lanza RangeError si window > series.length', () => {
        expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
        expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
    });

    test('acepta window igual a series.length', () => {
        expect(movingAverage([10, 20, 30], 3)).toEqual([20.00]);
    });
});
