function isPrime(n){
  if (typeof isPrime[n] === "undefined"){
       isPrime[n] = true;
       for(var i=2;i<=(n/2);i++){
          if (n % i === 0) {
            isPrime[n] = false;
            break;
          }
        }
       console.log("brewing the result ", isPrime[n]);
  } else {
     console.log("result from cache ", isPrime[n]);
  }
}