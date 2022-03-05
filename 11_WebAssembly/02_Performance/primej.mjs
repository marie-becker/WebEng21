// based on stackoverflow answer from Ted Hopp https://stackoverflow.com/a/12287599/15212696
function countPrimes(max) {
    let sieve = [], i, j;
    let numbers=0;
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            numbers++;
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return numbers;
}
export {countPrimes};

