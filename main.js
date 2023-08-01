
const xerclerim = "770 azn ipoteka 621 azn kredit 600 manat hesabat 1300 diger borclar 200 idman 40 manat benzin 35 manat kontur 30 Netflix";
const total = Lokalxerc(xerclerim);
console.log(total);




function Lokalxerc(str) {
    
    const numbers = str.match(/\d+/g);
  
    
    if (!numbers) {
      return 0;
    }
  
    const sum = numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
  
    return sum;
  }