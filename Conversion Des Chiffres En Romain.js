var A = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
	R = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
	Alength = A.length;
 
// conversion d'un entier en nombre romain
function AtoR( nb ){
	// on s'assure d'avoir un entier entre 1 et 3999.
	var x = parseInt( nb, 10 ) || 1,
		str = "";
 
	if ( x < 1 ){
		x = 1;
	} else if ( x > 3999 ){
		x = 3999;
	}
 
	// pour chaque A[ i ], 
	// tant que x est supérieur ou égal
	// on déduit A[ i ] de x.
	// arrêt de la boucle si x == 0
	for ( var i = 0; i < Alength; ++i ){
		while ( x >= A[ i ] ){
			x -= A[ i ];
			str += R[ i ];
		}
 
		if ( x == 0 ){
			break;
		}
	}
 
	return str;
}
 
// conversion d'un nombre romain en entier	
function RtoA( str ){
	// on s'assure d'avoir un texte ayant au moins un caractère.
	if ( ( typeof str != "string" ) || ( str.length < 1 ) ) return;
 
	var x = 0,
		item = "";
 
	// pour chaque R[ i ], 
	// si R[ i ] est égal à item
	// on ajoute A[ i ] à x
	// et on enlève item de str.
	for ( var i = 0; i < Alength; ++i ){
 
		while ( str.length >= R[ i ].length ){
			item = str.slice( 0, R[ i ].length );
 
			if ( R[ i ] == item ){
				x += A[ i ];
				str = str.substring( R[ i ].length );
			} else {
				break;
			}
		}
	}
 
	return x;
}
 
/* Test */
 
var str = "",
	x = 0,
	tab = [];
 
for ( var n = 1; n < 4000; n++ ){
	str = AtoR( n );
	x = RtoA( str );
 
	tab.push( [ n, str, x ] );
}
 
console.log( tab );

// ------------------------------ getElementById ----------------------------------------- //

document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var inputValue = document.getElementById('inputValue').value;
    var conversionType = document.getElementById('conversionType').value;
    var result;

    if (conversionType === 'AtoR') {
        result = AtoR(inputValue);
    } else {
        result = RtoA(inputValue);
    }

    document.getElementById('result').innerText = 'Résultat : ' + result;
});

