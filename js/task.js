// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, 
// kuris didesnis arba jie lygūs. (4 taškai)

// const a = 1;
// const b = 2;

// function kaskur (a, b){
// if (a > b) {
//     return ('a didesnis');
// }else if (a < b) {
//     return ('b didesnis');
// }else {
//     return ('abu lygus');
//     }
// }
// console.log(kaskur (a, b));

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// for (let i = 1; i < 11; i += 1) {
//     console.log(i);
// }

// 3. Naudojant for ciklą, išvesti į konsolę skaičius 
// nuo 0, 2, 4, 6, 8, 10. (5 taškai)

// for (let i = 0; i < 11; i += 2) {
//     console.log(i);
// }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius 
// nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// console.clear();

// for (let i = 0; i < 5; i+=1) {
//     let r = 0;
//         r = Math.floor(Math.random() * 10);
            
//     console.log(r);
    
// }

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. 
// Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// console.clear();

// let number = 10;
// let x = 0;
// while(x !== number){
//     x = Math.floor((Math.random() * 10) + 1);
//     if (x === 5) {
//     break;
//     }
//     console.log(x);
// }

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai 
// nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei 
// Math.max() funkcijų. (7 taškai)

// const masyvas = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
//     25, 26, 27, 28, 29, 30, 31, 32, 33];
   
// for (let i = 20; i < 30; i++) {
// }
// console.log(masyvas)
// let biggestNum = masyvas[0];
//      for (let d = 0; d < masyvas.length; d++) {
//          if (masyvas[d] > biggestNum) {
//              biggestNum = masyvas[d]
//          }
//      }
// console.log(biggestNum);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės 
// A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const stringArray = [];
let letterA = 0;
let letterB = 0;
let letterC = 0;
let letterD = 0;

for(let i = 0; i <= 100; i++){
    stringArray.push(Math.floor(Math.random() * 4));
    
    if(stringArray[i] === 0){
        stringArray[i] = 'A';
        letterA++;
    }
    if(stringArray[i] === 1){
        stringArray[i] = 'B';
        letterB++;
    }
    if(stringArray[i] === 2){
        stringArray[i] = 'C';
        letterC++;
    }
    if(stringArray[i] === 3){
        stringArray[i] = 'D';
        letterD++;
    }
}

console.log(stringArray);
console.log(letterA);
console.log(letterB);
console.log(letterC);
console.log(letterD);


// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai 
// (negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, 
// grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, 
// kad suma nelyginė. (10 taškų)

function lygineSuma (a, b) {
        let skaiciuSuma = 0;
        let arrIlgiuSuma = 0;
        if(typeof a === 'number' && typeof b === 'number'){
            skaiciuSuma = a + b;
            if(skaiciuSuma % 2 === 0){
                return `Skaiciu suma: ${skaiciuSuma}`;
            }else{
                return `Skaiciu suma nelygine`;
            }
        }else if(typeof a === 'object' && typeof b === 'object'){
            arrIlgiuSuma = a.length + b.length;
            if(arrIlgiuSuma % 2 === 0){
                return `Masyvu ilgiu suma: ${arrIlgiuSuma}`;
            }else{
                return `Masyvu ilgiu suma nelygine`;
            }
        }else {
            return `Kintamieji turi buti abu skaiciai arba masyvai`;
        }
    }
    
    console.log(lygineSuma([2, 2], [2, 2]));
    // kad tik būtų...

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
// Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar 
// pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik 
// iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(u) {
    if (typeof u !== 'number') {
        return 'Ne skaicius'
    } 
    if (u % 2 === 0 && u > 2) {
        return `${u} ne pirminis skaicius`
    } else if (u % 3 === 0 && u > 3){
        return `${u} ne pirminis skaicius`
    } else if (u % u === 0 && u % 1 === 0) {
            return `${u} pirminis skaicius`
    }
}

console.log(pirminisSkaicius(10));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną 
// kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. 
//  Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris (a) {
        let number = "(XXX) XXX-XXXX";
        if(typeof a !== 'number' && a.length !== 10){
            return `${a}`;
        }
        for(let i = 0; i < a.length; i++){
            number = number.replace('X', a[i]);
        }
        return number;
    }
    
    console.log(telefonoNumeris([3, 7, 0, 6, 5, 6, 1, 1, 1, 1]));
 