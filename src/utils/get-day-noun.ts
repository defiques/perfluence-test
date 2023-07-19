export function getDayNoun(number: number) {

    const daysNouns = ['день', 'дня', 'дней'];

    let n = Math.abs(number);

    n %= 100;
    if (n >= 5 && n <= 20) {
        return daysNouns[2];
    }

    n %= 10;
    if (n === 1) {
        return daysNouns[0];
    }

    if (n >= 2 && n <= 4) {
        return daysNouns[1];
    }

    return daysNouns[2];
}