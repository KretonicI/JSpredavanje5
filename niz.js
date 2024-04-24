var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];
//zbroji sve članove niza
var suma = 0;
for ( var x=0; x<brojcaniNiz.length; x++){
suma += brojcaniNiz[x];
}
console.log('suma=' + suma);

var matrix = [[1,2,3], ['John', 'Jane', 'Mike']];

for (i = 0; i< matrix.length; i++){
    console.log(matrix[i].join());
    for (var j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);

    }
}
var myNames = [ 'John', 'Jane',, 'Mike'];

for (var MyName of myNames){
console.log(MyName);
}