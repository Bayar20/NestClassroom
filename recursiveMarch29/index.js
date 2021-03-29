const n = 20

const recurse = (n) => {
    if (n !== 0){
        recurse (n - 1);
        console.log(n)
    }
};

recurse(n);