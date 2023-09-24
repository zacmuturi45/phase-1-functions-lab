function distanceFromHqInBlocks(distance) {
    return Math.abs(42-distance);
}
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(distance) {
    return (Math.abs(42-distance) * 264);
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(x, y) {
    return (Math.abs(x - y) * 264);
}
distanceTravelledInFeet(50, 60);

function calculatesFarePrice(x, y) {
    const feet = Math.abs(x - y) * 264;
    const overFeet = feet - 400;
    if (feet < 400) {
        return 0
    } else if (feet >= 400) {
    return (feet >= 400 && feet <= 2000 ? 2/100 * overFeet : feet < 2500 && feet < 2500 ? 25 : 'cannot travel that far');
    }
}
calculatesFarePrice();