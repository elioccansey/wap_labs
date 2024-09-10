const isPrime = (n: number): Promise<{ prime: boolean }> => {
    // if (n <= 1) return ({ prime: false });
    // for (let i = 2, s = Math.sqrt(n); i <= s; i++) 
    //     if (n % i === 0) throw new Error(JSON.stringify({ prime: false }))
    // return ({ prime: true });
    
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }
        resolve({ prime: true });
    });
};

(async () => {
    try {
        console.log('start');
        const result = await isPrime(8); 
        console.log(result); 
    }catch(error){
        // const er = error as Error
        console.error(error)
    } finally {
        console.log('end');
    }
})();

