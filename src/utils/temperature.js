function toCelsius(f) { // Luis Sagnay
    if (typeof f !== 'number' || !Number.isFinite(f)) {
        throw new TypeError('debe ser un numero finito');
    }
    const celsius = (f - 32) * 5 / 9;
    return Number(celsius.toFixed(1));
}

function toFahrenheit(c) { // Luis Sagnay
    if (typeof c !== 'number' || !Number.isFinite(c)) {
        throw new TypeError('debe ser un numero finito');
    }
    const fahrenheit = (c * 9 / 5) + 32;
    return Number(fahrenheit.toFixed(1));
}

function movingAverage(series, window) { // Luis Sagnay
    // Validar que series sea un arreglo
    if (!Array.isArray(series)) {
        throw new TypeError('series debe ser un arreglo');
    }

    // Validar que todos los elementos sean números
    if (!series.every(val => typeof val === 'number' && Number.isFinite(val))) {
        throw new TypeError('todos los valores de series deben ser numeros finitos');
    }

    // Validar que window sea un número entero
    if (typeof window !== 'number' || !Number.isInteger(window)) {
        throw new TypeError('window debe ser un numero entero');
    }

    // Validar rango de window
    if (window < 2) {
        throw new RangeError('window debe ser al menos 2');
    }

    if (window > series.length) {
        throw new RangeError('window no puede ser mayor que la longitud de series');
    }

    // Calcular medias móviles
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const windowSlice = series.slice(i, i + window);
        const average = windowSlice.reduce((sum, val) => sum + val, 0) / window;
        result.push(Number(average.toFixed(2)));
    }

    return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };
