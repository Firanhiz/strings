// stringName.length;
let str1 = 'burada string var';
let str1Length = str1.length;
console.log(str1Length);
// ___________________________________________________________________________________________


// stringName.charAt();  ---> moterizede yazilmis eded string-in index-e uygun simvolu qaytarir
let str2 = 'string';
let str2CharAt = str2.charAt(2);
console.log(str2CharAt);
// ___________________________________________________________________________________________


// stringName.charCodeAt();  ---> moterizede yazilmis eded string-in index-e uygun simvolun kodunu qaytarir
let str3 = 'utf-16-daki kodumu qaytar';
let str3CharCodeAt = str3.charCodeAt(3);
console.log(str3CharCodeAt);
// ___________________________________________________________________________________________


// stringName.at(); ---> string-in index-ne uygun simvolu gosterir (indexOf() metodu kimi);
let str4 = 'simvol';
let str4At = str4.charAt(3);
console.log(str4At);
// ___________________________________________________________________________________________



// stringName[]; ---> string-in index-ni yazaraq muvafiq simvolu qaytarir (charAt, indexOf kimi).
let str5 = 'ozunu array-e oxsadan string';
let str5LikeArray = str5[6];
console.log(str5LikeArray);
// ___________________________________________________________________________________________


// stringName.slice(start, end)  ---> bu zaman moterizedeki ilk parametr string necenci index-den kesimini gosterir ve ikinci parametr ise necenci index-e qeder kesim davam edeceyini gosterir
// QEYD1: moterizedeki ikinci parametr buraxilsa, string ilk parametrde qeyd olunmus index-den baslayaraq sona kimi kesecek
// QEYD2: moterizede menfi eded yazilarsa, o zaman kesim sondan sayilaraq bas verecek
let str6 = 'biri var imis biri yox imis';
let str6Slice = str6.slice(5, 8);
console.log(str6Slice);
// ___________________________________________________________________________________________


// substring()  ---> slice() metodundan ferqi menfi qiymetler alarken geriye sifir qaytarir
// ___________________________________________________________________________________________


// stringName.substr();  ---> moterizedeki ilk parametr haradan kesime baslayacagini, ikinci parametr ise kesilmisden baslayaraq necencide dayanacagini bildirir
// menfi eded yazdiqda sondan saymaga baslayir
let str7 = 'substr';
let str7Substr = str7.substr(2, 3);
console.log(str7Substr);
// ___________________________________________________________________________________________


//  stringName.toUpperCase(); ---> herfleri boyuk edir
//  stringName.toLowerCase(); ---> herfleri kicik edir

function myFunction() {
    let str8 = document.getElementById('div1').innerHTML;
    document.getElementById('div1').innerHTML = 
    str8.toUpperCase();

    // myFunction2();
}

function myFunction2() {
    let str9 = document.getElementById('div1').innerHTML = 'boyuk herfleri kicilt';
    document.getElementById('div1').innerHTML = 
    str9.toLowerCase();
}
// ___________________________________________________________________________________________





