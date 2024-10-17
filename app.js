// Foydalanuvchiga so'z kiritishni taklif qiladigan dastur yozing.
// So'zni kichik harf bilan ko'rsating.
// So'zni katta harf bilan ko'rsating.

// 1-misol tepada

// Foydalanuvchidan jumla kiritishni so'rang.
// Ulardan so'zni jumlaga kiritilgan yoki yo'qligini tekshirish uchun kiritishni
//  taklif qiling  . So'z topilgan yoki topilmaganligini ko'rsatish
// uchun xabarni ko'rsating.
// Jumla so'z bilan boshlanganligini tekshirish va natijani ko'rsatish kk

// 2-misol tepada

// Foydalanuvchini boshida yoki oxirida qo'shimcha bo'shliqlar bilan jumla
//  kiritishni taklif qiling.
// Qo'shimcha bo'shliqlarni olib tashlash va tozalangan jumlani ko'rsatish kk
//undan  dan oldin va keyin gap uzunligini ko'rsating.

// 3-misol tepada

// Foydalanuvchidan jumla kiritishni so'rang.
// Gapdagi birinchi bo'shliqning o'rnini topish va uni ko'rsatishkk
// Birinchi so'zni (jumla boshidan birinchi bo'sh joyga) chiqarish va uni ko'rsatish kk

// 4-misol tepada

// Foydalanuvchidan sevimli so'zini kiritishni so'rang.
// So'zni bo'sh joylar bilan ajratilgan holda 5 marta ko'rsatish kk
// Boshqa so'zni so'rang va ikkala so'zni birlashtirish va natijani ko'rsatish kk

// 5-misol tepada

// 1-misol

// let soz = prompt("biror bir so'z kiriting");
// alert(soz.toLocaleLowerCase());
// alert(soz.toLocaleUpperCase());

// 1-misol tugadi

// 2-misol

// let soz = prompt("biror bir jumla kiriting");
// if(soz == ""){
//     alert("bunday so'z yo'q boshqatdan so'z kiriting")
// }
// else{
//     let soz1 = prompt("kiritgan sozizni ichidan so'z kiriting kiriting")

//     if(soz1 && soz.includes (soz1)){
//         alert(`"${soz1}": so'zi topildi`)
//     }
//     else{
//         alert(` "${soz1}": so'zi topilmadi`)
//     }
// }

// 2-misol tugadi

// 3-misol

// let jumla = prompt("boshida va oxirida bo'shliq qoldirib jumla kiriting");

//   alert("Kiritilgan jumlaning uzunligi  " + jumla.length);
//   let len = jumla.trim();
//   alert("Kiritilgan jumlani probellarsiz holati  " + len);
//   alert("Kiritilgan jumlani probellarsiz holatining uzunligi  " + len.length);

// 3-misol tugadi

// 4-misol

// let jumla = prompt("Biror bir jumla kiriting:");

// let birinchiBoshlik = jumla.indexOf("");

// if (birinchiBoshlik !== -1) {
//     alert(`Birinchi bo'shliqning o'rni: ${birinchiBoshlik}`);

//     let birinchiSoz = jumla.substring( birinchiBoshlik);
//     alert(`Birinchi so'z: ${birinchiSoz}`);
// } else {
//     alert("Jumlada bo'shliq topilmadi.");
// }

// 4-misol tugadi

// 5-misol



// // Foydalanuvchidan sevimli so'zini kiritishni so'raymiz
// let sevimliSoz = prompt("Sevimli so'zingizni kiriting:");

// // So'zni bo'sh joylar bilan ajratilgan holda 5 marta ko'rsatamiz
// for (let i = 0; i < 5; i++) {
//     document.write(sevimliSoz + " ");
// }
// document.write("<br>"); // Yangi qatorda davom etish

// // Boshqa so'zni so'raymiz
// let boshqaSoz = prompt("Boshqa so'zni kiriting:");

// // Ikkala so'zni birlashtiramiz va natijani ko'rsatamiz
// let birlashtirilganSoz = sevimliSoz + " " + boshqaSoz;
// document.write("Birlashtirilgan so'z: " + birlashtirilganSoz);