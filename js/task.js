// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, 
// kuris didesnis arba jie lygūs. (4 taškai)

const a = 1;
const b = 2;

if (a>b) {
    console.log('a didesnis');
}else {
    console.log('b didesnis');
// }if (a == b){
    // console.log('abu lygus');
}

console.log();

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i < 11; i += 1) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius 
// nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = 0; i < 11; i += 2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius 
// nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.clear();

for (let i = 0; i < 5; i+=1) {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            
    console.log(i);
    }
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. 
// Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.clear();
let number = 10;
let x = 0;
while(x !== number){
  x = Math.floor((Math.random() * 10) + 1);
  console.log(x);
}


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai 
// nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei 
// Math.max() funkcijų. (7 taškai)

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
    25, 26, 27, 28, 29, 30, 31, 32, 33];

    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers.length)
    // }

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės 
// A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)



// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
// Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai 
// (negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, 
// grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, 
// kad suma nelyginė. (10 taškų)



// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
// Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar 
// pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik 
// iš savęs ir tik iš vieneto be liekanos.) (10 taškų)



// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną 
// kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. 
//  Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)