function showPrimeNumbers(lownumber, highnumber){
    for(let  i = lownumber; i<= highnumber; i++){
        let isPrime = true;
        for(let j = 2; j<=i; j++){ //kendisine bölümü asal sayılmadığı için j verilen i sayısından 1 küçük
            if(i % j === 0 && j !==i){   //bölüm 0'sa (yani bölünmüyor) ve yalnızca kendisine bölünüyorsa
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}



showPrimeNumbers(2,10)
console.log(showPrimeNumbers);
// console.log(process.argv.slice(2));

//veya direkt konsolda verdiğimiz elemanlarla fonksiyonu çalıştırmak istersek:
const arguments = process.argv.slice(2);

showPrimeNumbers(arguments[0]*1,arguments[1]*1); //fonksiyon çalıştırılırken kullanılan degerler

//konsol komutu: node primeNumbers x y 
