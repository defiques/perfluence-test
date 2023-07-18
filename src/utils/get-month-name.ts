export function getMonthName(index: number): string {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    if (index >= 0 && index < months.length) {
        return months[index];
    } else {
        return "Недопустимый индекс месяца";
    }
}