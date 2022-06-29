//** 
// let name = prompt("adınızı giriniz");
//
// if (name) {
//     console.log(`kullanıcı adınız ${name}`)
// } else {
//     console.log("geçersiz");
// }


//**  
//let x = 8;
// let y = 23;

// if (x > y) {
//     console.log(x + " sayısı " + y + " sayısından büyüktür.")
// } else {
//     console.log(y + " sayiyisi " + x + " sayısından büyüktür.")
// }



//**  yıl sonu notu

//let studentV = 50;

// let studentF = 50;

// let ortalama = (studentV * (3 / 10)) + (studentF * (7 / 10));

// if (ortalama >= 0 && ortalama <= 30) {

//     console.log(`Nor ortalamanız : ${ortalama} KALDINIZ(FF)`);
// } else if (ortalama >= 31 && ortalama <= 49) {

//     console.log(`Nor ortalamanız : ${ortalama} KOŞULLU(DC)`);
// } else if (ortalama >= 50 && ortalama <= 84) {

//     console.log(`Nor ortalamanız : ${ortalama} GEÇTİNİZ(CC)`);
// } else if (ortalama >= 85 && ortalama <= 100) {

//     console.log(`Nor ortalamanız : ${ortalama} GEÇTİNİZ(AA)`);
// }


//**  random sayı

//let random = Math.floor(Math.random() * 10);

// let tahmin = prompt("Bir sayı gir ve rastgele sayı bulmaya çalış!!");

// if (tahmin == random) alert("BİLDİN!!!");

// else if (tahmin == "") alert("boş giriş yaptınızz");

// else if (tahmin == null) alert("giriş yapmaktan vazgeçtiniz");

// else {
//     alert("Bir daha dene " + random)
// }


//kitle indeksi

let height = 1.95;

let weight = 80;

let vki = (weight) / (height * height);

if (vki < 18.5) {
    console.log(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
} else if (vki >= 18.5 && vki <= 24.9) {
    console.log(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
} else if (vki >= 25.0 && vki <= 29.9) {
    console.log(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
} else if (vki >= 30) {
    console.log(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
} else {
    console.log("Girdiğiniz değerleri kontrol ediniz");
}