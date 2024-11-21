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

let names='I love java script';
console.log(names.slice());//affiche toute la phrase
console.log(names.slice(2,6));//affiche d'idex2 jusqu'a 6
console.log(names.slice(-6));//6 de la fin
console.log(names.substring());//lameme avecslice mais ne prend pas les valeurs negatives

//les tableaux
let table=['ahmed','abc','ywzn']
console.log(table);//afficher le tableau
console.log(table[0]);//aff 1er element du tableau
console.log(table.length);//affiche nbrs des elements
console.log(table.length-1);

let objects=[1,2,3,4,5,[6,7,8]];
console.log(objects);
console.log(objects[5][1]);//afficher "7"{tab dans un tab}
// modification d'un tab
table[1]="1234";
console.log(table);
console.log(table.push('kamal'));//"push"/ajouter element a la fin 
console.log(table);
console.log(table.unshift('debut'));//"unsift"/ajouter au debut du tableau
console.log(table);
console.log(table.shift());//""shift/supp du debut et stocker
console.log(table);

console.log(table.pop()); //supp du fin 
console.log(table);

console.log(table.splice(0,1)); //supprime avec psition
console.log(table)
console.log(table.splice(0, 1, "gml", "do")); // supprime et ajoute des éléments(remplacement)//////splice(start,count,add,add,ad..)
console.log(table)

console.log(table.slice(0,2));//prend une copie!!
console.log(table);
let tab=['a','b','c','d','e','a'];
console.log(tab)
console.log(tab.indexOf('a')); //index d'un element
console.log(tab.indexOf('a',4));
console.log(tab.lastIndexOf('a',-0));
console.log(tab.includes("d",4))//?contient unn element 

console.log(table)
console.log(table.reverse());//reverser le tableau
console.log(table.sort());//classement du tableau


////operation sur_tableau////
let tab1=['ahmad','ali','mzen'];
let tab2=['kamal','karim','omar'];
console.log(tab1.concat(tab2));//concatination des 2 tableau
console.log(tab1.concat(tab2,'mona'));//concatination des 2 tableau + ajout
console.log(tab1.join()); // d'un tab => string
console.log(tab1.join('-'));//d'un tab => string separer par "- "


/////////////////////comparison/////////////////
let p="ahmed";
let t="ali";
console.log(p==t);//comprerles l'egalites des valeures si vrai ou fausse

//let askmail = prompt('Entrez votre email :'); // Boîte de dialogue
//askmail = askmail.toUpperCase().trim();
//let email = "ddd@gmail.com";
//email = email.toUpperCase();
//console.log(askmail == email); // Vérifie si les emails sont identiques (sans distinction de casse)

//.toUpperCase()// to majuscule
//.toLowerCase()// to minisci=ule
// .trim(); //supp les espace de debut et fin et non au milieu


///////////////////////////condition//////////////////////////////
let num1=prompt('entrer le num 1');
let num2=prompt('entrer le num 2');
if(num1==num2){
    console.log('hello');
}

let role=prompt('what is your role');
if(role=='admin'){
    console.log('create ,update, delete');
}
else if(role=='user'){console.log('hello user')}

let age=prompt('what is your age');
age>18?
    document.write('hello user')
    :age==18?
     doucument.write('you are 18 ,hello')
     :age<18
     document.write('you are very young');

let result= age>18? 'hello user': age<18? 'you are very young': 'you are 18,hello ';
document.write(result);

/////// les fonctions ///////
function produit (prix,taxe, ads){
    let product= prix*taxe;
    let result= product*ads;
    console.log('result :', result);
}
produit(2,2,2)
produit(1,2,2)
produit(3 ,2,2)

