export function getDates(): {start_date: string, end_date: string} {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const endMonth = currentMonth - 1;
    const endYear = currentYear;

    const startMonth = currentMonth;
    const startYear = endYear - 1;

    const startDate = new Date(Date.UTC(startYear, startMonth - 1));
    const endDate = new Date(Date.UTC(endYear, endMonth, 0));

    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    return { start_date: formattedStartDate, end_date: formattedEndDate };
}