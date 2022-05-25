// Function: date objesinden yılı eğer 2000 üstünde ise milenyum yılı yoksa milenyum değil yazdırsın
// keyword:if-else ,
new Date()
function dateMilenium() {
  console.log((new Date().getFullYear() >= 2000) ? "Milenyum(+)" : "Milenyum(-)")
}
dateMilenium()
/////////////////////////////////////////////////////////////////
// Örnek-1
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem
// Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?
// Çözüm:
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let sayi1= Number(prompt("Lütfen 1.Sayı"))
let sayi2=Number(prompt("Lütfen 2.Sayı"))
let result = Birincdedenklem(sayi1,sayi2)
  document.write(result)
function Birincdedenklem(sayi1,sayi2){
  return (3* sayi1) + (4 * sayi2)
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
// Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
// Çözüm:
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 

let degree = Number(prompt("Dereceyi Giriniz"))
document.write(fah(degree))
function fah(degree) {
  return (degree * 9 / 5) + 32
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 

// örnek-3 operatör
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
// 4+3*2(3:3-1*6+9:1+(3:3)) hesaplayalım
4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3))
var opera= 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));
console.log(opera);
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 

// örnek-4 Math
//  Soru: -5.9 sayısını aşağıdaki işlemleri yapalım
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
//  1-mutlak değeri alsın 5.9
let deger = -5.9;
console.log(Math.abs(-5.9))
// document.write(deger.Math.abs)
//  2-yuvarlama yapsın  6.0
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
console.log(Math.round(deger))
//  3-karesini alsın 36.00
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
console.log(6**2)
//  4-karekök alsın  6.0
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
console.log(Math.sqrt(6))
//  5-yuvarlama yapsın 6.0
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
console.log(Math.ceil(6))
console.log(Math.floor(6))
console.log(Math.round(6))
// 6-çıkan sonucu 5 bölsün 6/5=1
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
console.log(6/5)
//  7- iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
let sayi3=[1,5];
sayi3.sort();
//  8- küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
let sayi4 =Number(prompt("Sayı Giriniz"));
if (sayi4 %2 == 0){
document.write(sayi4+5);

}

else {  
  (!(sayi4 %2==0));
  document.write(sayi4+3)

} 
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
//  9- çıkan sonucu üslü göstersin  4 ^ 4 = 4 * 4 * 4 *4
console.log(Math.pow(4,4))
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
// Soru verilen bir sayının negatif mi pozitif mi algoritma
function NegatiforPositive() 

{   let sayi5=Number(prompt("lütfen negatiflik testi için sayı giriniz"));
  if (sayi5>0){
    document.write("Sayı Pozitiftir");
} else if (sayi5<0){
    document.write("Sayı Negatiftir") 
}
else{
    document.write("Sayı Sıfır")
}
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 

//  Soru
//  kullanıcının girdiğini sayıya kadar olan sayılardan; ==>> 1<=X<=kullanıcıgirdiğisayı
// kaçtane sayı var
// bu sayılardan kaç tane tek sayı var
// bu sayılardan kaç tane çift sayı var
// bu sayıların toplamı
// // Çözüm
var sayi = 5;
var sayiAdeti = 0, ciftSayi = 0, tekSayi = 0, toplam = 0, ortalama = 0;
for (var i = 1; i <= sayi; i++) {
  sayiAdeti++;
  if (i % 2 == 0) {
    ciftSayi++;
  } else {
    tekSayi++;
  }
  toplam += i;
}
ortalama = toplam / sayiAdeti;
document.write("kaçtane sayı: " + sayiAdeti + " kaç tane tek sayı: " + tekSayi + " kaç tane çift sayı: " + ciftSayi)
document.write(" toplam: " + toplam + " ortalaması:" + ortalama)
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
// Soru: kullanıcı tarafından girilen iki değişkenin birbirine eşit olup olmadığını bulan algoritma

    function equalornot() {
        while(true) {
          let kullaniciadi= prompt("kullanıcı adını giriniz");
          let repkullaniciadi= prompt("Lütfen tekrar giriniz")
          if (kullaniciadi==repkullaniciadi);
            document.write("Teşekkürler Aynı");
            break;
        } 
          if(!(kullaniciadi==repkullaniciadi)) {
            document.write("Farklı kullanıcı adı tekrar dene");
            
        }
        }
     equalornot()
    
function deneme() {
  while (true) {
    var password = prompt("lütfen şifre giriniz");
    var rePassword = prompt("lütfen şifreyi tekrar giriniz");
    if (password === rePassword) {
      document.write("teşekkürler aynı şifre");
      break;
    } else {
      document.write("farklı şifre tekrar giriniz");
    }
  }
}
deneme()
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Date objesinden haftanın hangi gün olduğunu bulan algoritma ?
  let today = new Date().getDay();
    document.write(today);
    switch(today){
      case 0:
        document.write("Pazartesi")
        break;
      case 1:
        document.write("Salı")
        break;
      case 2:
        document.write("Çarşamba")
        break;
      case 3:
        document.write("Perşembe")
      case 4:
        document.write("Cuma")
      case 5:
        document.write("Cumartesi")
      case 6:
        document.write("Pazar")
        default:
        document.write("farklı sayı girildi böyle bir gün yoktur");
        break;
    }

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
