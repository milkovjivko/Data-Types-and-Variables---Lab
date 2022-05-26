function requiredReading(numPages, pageOneHour, target) {
    let totTime = numPages / pageOneHour;
    let reqHourPerDay = totTime / target;

    console.log(reqHourPerDay);
}
requiredReading(212,
    20,
    2
)