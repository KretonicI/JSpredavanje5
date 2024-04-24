var names = [ 'John', 'Jane', 'Bob',, 'Mike'];

/*
1.Pomoću petlje napravite iteraciju kroz niz i ispišite sve elemente niza
2.Dodajte svoje ime na kraj niza
3.Koristeći petlju, napravite iteraciju kroz ovaj niu te nakon što ispišete "jane" izađitew iz petlje
4.sortirajte niz abecedno
5.ispišite ga */

//1
for (var myName of names){
console.log(myName);
}

//2
names.push ('Ivana');

//3
for (var myName of names) {
    console.log(myName);
    if (myName ==='Jane') {
        break;
    }
    }

//4
    for (var myName of names) {
        if (names=== undefined){
            continue;
        }
    console.log(names);
}
//5
names.sort();
//6
console.log(names.join());



var namesLong = [ 'John', 'Jane', 'Bob',, 'Mike', 'Leonardo'];
var duljina = 0;
var najduzeIme = '';
for (var ime of namesLong ) {
    if ( typeof ime == 'undefined'){
        continue;
    }
    var duljinaImena=ime.length;
    if (duljinaImena > duljina) {
        duljina = duljinaImena;
        najduzeIme = ime;
    }
}
console.log ('Duljina: ' + duljina)
console.log ('Najduze ime je: ' + najduzeIme)