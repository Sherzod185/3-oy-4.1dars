  alert("Ko'p xonali sonlarni raqamlar yig'indisini hisoblovchi saytchaga kirish uchum ok ni bosing")
let a=prompt("Sonni kiriting:");
a=String(a)
let b=0;
let i=0;
while(i<a.length){
  b+=Number(a[i])
  i++
}
document.write("Siz yozgan sonning raqamlar yig'indisi: "+b+ " ga teng");