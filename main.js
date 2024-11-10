document.querySelector('h1').style.color= 'red';//selection d'ecritur en h1 et ecrit en red 
document.write('hello');//erit sur interface

console.log('hello');//erit sur console  

//window.alert('hello world ');//fenetre d'alerte

document.write('abc');

//////////////Variable//////////////
var x=10;
console.log(x);
let y=21;
console.log(y);
let r='abcd';
const f=1234;
console.log(f);
console.log(y+f+r);//concatination
console.log('may name is '+r+' my age is '+x);
console.log(`my name is ${r} and my age is ${x}`);
y+=10;
console.log(y);//y+10
////////////text -->number////////
console.log(Number("4"));//affiche 4
console.log(Number("3 asdd"))//nan
console.log(parseInt("3 asdd"))//3 (int number)
console.log(parseInt("qwer 3 asdd"))//nan
console.log(parseFloat("3.5 asdd"))//3.5 (float)
console.log(Number.MAX_VALUE)//nan

//////////Math////////////////

console.log(Math.abs(-3));//neg->pos
console.log(Math.sqrt(4));//la racine
console.log(Math.pow(2,3));//puissanse
console.log(Math.round(10.9));//valeur aproxiamitive
console.log(Math.ceil(10.1));//valeur aproxiamitive au plus grand
console.log(Math.floor(10,9));//valeur aproxiamitiveau plus moin
console.log(Math.min(10,9,4,5,2));
console.log(Math.max(10,9,100,345));

////////////number -->text////////
let k = 100;
console.log(typeof String(k));
console.log(typeof k.toString());
console.log(typeof (100).toString());

////////////STRING//////////////////
d='i am a pupil';  
let name='abc';
console.log( name.repeat(100));
console.log(name[0]);
console.log(name.charAt(2));
console.log(name.charAt(100));// n'affiche aucune valeur
console.log(name[100]);//undefined
console.log(name.indexOf('b'));//index d' alphabet
console.log(name.split());
console.log(d.split());




