function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;

    for (let i of ar) {
        if (socks[i]) {
            socks[i] ++;
        } else {
            socks[i] = 1;
        }

        if (socks[i] % 2 === 0) {
            pairs += 1;
        }
    }
    console.log(socks);
    console.log(pairs);
    return pairs;
    
}
sockMerchant(3, [1, 2, 3, 2, 3, 4, 1, 2, 2, 2, 2]);
