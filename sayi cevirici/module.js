let birler = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
let onlar = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
let grupIsımleri = ["", "bin", "milyon", "milyar", "trilyon", "katrilyon"]



function ucluGrupOLustur(sayiAsString) {
    let ucluGrupArrayi = new Array();
    for (let index = sayiAsString.length; index>2; index = index-3) {
        let birUcluGrup = sayiAsString.slice(index-3, index);
        ucluGrupArrayi.push(birUcluGrup);
        
    }
    return ucluGrupArrayi;
}
function birlerCozumle(pBasamakDegeri) {
    return birler[pBasamakDegeri] + " ";
}
function onlarCozumle(pBasamakDegeri) {
    return onlar[pBasamakDegeri] + " ";
}
function yuzlerCozumle(pBasamakDegeri) {
    if (pBasamakDegeri == 0) {
        return "";
    }else if (pBasamakDegeri == 1) {
        return "yüz";
    }else{
        return birler[pBasamakDegeri] + "yüz"
    }
}

function ucluCozumle(ucSayiAsArray) {
    let okunus = "";
    let yuzlerBasamagi = ucSayiAsArray[0];
    let onlarBasamagi = ucSayiAsArray[1];
    let birlerBasamagi = ucSayiAsArray[3];

    if (ucSayiAsArray.length == 3) {
        okunus = yuzlerCozumle(yuzlerBasamagi) + onlarCozumle(onlarBasamagi) + birlerCozumle(birlerBasamagi);
    }else if (ucSayiAsArray.length == 2) {
        okunus =  onlarCozumle(onlarBasamagi) + birlerCozumle(birlerBasamagi);
    }else{
        okunus = birlerCozumle(birlerBasamagi);
    }
return okunus;
}

function grubuBul(pUcluSirasi){
    return grupIsımleri[pUcluSirasi];
}

