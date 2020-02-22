let test = "656256389";

let ucluGruplar = ucluGrupOLustur(test);

let okunus = 
         ucluGruplar.map(function(pUcluGrup,pIndex){
return ucluCozumle(pUcluGrup) + grubuBul(pIndex);
         })
         .reverse()
         .join(" ");

console.log("OKUNUS",test,okunus);