/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let pathAr = path.split('');
    console.log(pathAr)
    let altitude = 0;
    let valleys = 0;
    let mountains = 0;

    for ( let step of pathAr) {
        if (step === 'D'){
            altitude --;
            if(altitude === 0) {
                mountains ++;
                console.log(`mountains: ${mountains}`);
            }
            console.log(`My altitude: ${altitude}`);
        }else if (step === 'U'){
            altitude ++;
            console.log(`My altitude: ${altitude}`);
            if(altitude === 0){
                valleys ++;
                console.log(`vallyes: ${valleys}`);
            }
        }
        
    }
    return valleys;
}

countingValleys(8, 'UDDDUDUUUDDDUDUU');

