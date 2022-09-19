function digitalRoot(n) {
    return n>=10?
        (n=(n+='').split('').map(x=> x=x*1).reduce((a,b)=>{return a+b}),
            digitalRoot(n)) :
        n
}