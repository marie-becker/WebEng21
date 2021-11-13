onmessage = function () {
    let i = 0;
    let cache = [];
    for (; ; i++) {
        if (i === 0 || i === 1) {
            cache.push(BigInt(i));
            self.postMessage("Index: " + i + " Fibonacci: " + i)
            continue;
        }
        const next = cache[cache.length - 2] + cache[cache.length - 1];
        cache.push(next);
        postMessage("Index: " + i + '<br>' +  " Fibonacci: " + next)
    }
}