
const start = 42;

function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
        return blocks - start;
    } else if (blocks < 42) {
        return start - blocks;
    }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end){
    let distanceTravelled = end - start;
    return Math.abs(distanceTravelled) * 264;
}

function calculatesFarePrice(start, end){
    let sample = distanceTravelledInFeet (start, end)
    if (sample <= 400){
        return 0;
    } else if (401 < sample && 2000 > sample){
        return (sample-400) * 0.02;
    } else if (2001 <= sample && 2500 > sample){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}