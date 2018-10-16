// JavaScript Document
/* ---------------- POBRANIE PRZYCISKÓW ------------------ */
var graczKamien = document.getElementById('graczKamien'),
    graczPapier = document.getElementById('graczPapier'),
	graczNozyczki = document.getElementById('graczNozyczki');
	
/* ----------------- ZDARZENIA -GRACZ WYBIERA ELEMENT GRY ---------------------------*/
graczKamien.addEventListener('click', function () {
    wyborGracza('kamien')
});

graczPapier.addEventListener('click', function () {
    wyborGracza('papier')
});

graczNozyczki.addEventListener('click', function () {
    wyborGracza('nozyczki')
});
/*------------------------ JAK DŁUGO TRWA GRA ------------------------*/

var wr=(parseInt(prompt('Do ilu wybranych rund chcesz grać?')));
function wyborGracza(wyborGracza) {
    document.getElementById('wyborGracza').innerHTML=wyborGracza;
	
	/*-----------PRZY NOWYM WYBORZE GRACZA KOMPUTER LOSOWO WYBIERA INNY PRZEDMIOT-------------------*/
	var wk=wyborKompa(wyborKompa);
	document.getElementById('wyborKompa').innerHTML = wk;
	wynik(wyborGracza, wk);
    
}
/*----------------------- WYBOR KOMPA---------------------*/
function wyborKompa(wyborKompa) {
	const wybor = ['kamien', 'papier', 'nozyczki'];
	var komp = Math.floor(Math.random() * wybor.length);
	return wybor[komp];
}
/*------------------------ PORÓWNANIE WYBORÓW I USTALENIE WYNIKU -----------------------*/
var suma = 0,
    sumaRemis = 0;
    sumaGracz = 0,
	sumaKomp = 0;
function wynik(wyborGracza, wk ) {	 
if (wyborGracza == wk) {
		document.getElementById('info').innerHTML = 'REMIS';
		sumaRemis = sumaRemis+1;
		
	}
	else if
	(   wyborGracza == 'nozyczki' && wk == 'papier' ||
	    wyborGracza == 'kamien' && wk == 'nozyczki' ||
	    wyborGracza == 'papier' && wk == 'kamien' )
	 {
		 document.getElementById('info').innerHTML = "wygrałes runde";
		 sumaGracz = sumaGracz+1;
		 document.getElementById("sumaGracz").innerHTML = sumaGracz;
	}
	else if
	(   wyborGracza == 'nozyczki' && wk == 'kamien' ||
	    wyborGracza == 'kamien' && wk == 'papier' ||
	    wyborGracza == 'papier' && wk == 'nozyczki' ){
		 document.getElementById('info').innerHTML = "przegrałes runde";
		 sumaKomp = sumaKomp+1;
		 document.getElementById("sumaKomp").innerHTML = sumaKomp;
	 }
	 suma = sumaRemis + sumaGracz + sumaKomp;
     document.getElementById('iloscRund').innerHTML =suma;
	 koniecGry();
}
/*------------------------- KONIEC GRY ---------------------------------- */
function koniecGry() {
	if( wr == sumaGracz){
		var btn=document.querySelector('.btn-gra');
		var sukces=document.querySelector('#podsumowanie');
		btn.disabled='true';
		console.log("zablokowano");
		btn.classList.add('btn-koniec');
		if(sumaGracz>sumaKomp){
			sukces.classList.add('label-danger');
			document.getElementById('podsumowanie').innerHTML="Wygrałeś gre!!! Uzyskałeś "+sumaGracz+" punkty w "+suma+" rundach a komp tylko "+sumaKomp+" punkty"
		}
		else if(sumaGracz=sumaKomp){
			sukces.classList.add('label-warning');
			document.getElementById('podsumowanie').innerHTML="Remis!! Macie po "+sumaGracz+" punkty w "+suma+" rundach"
		}
		else {
			sukces.classList.add('label-info');
			document.getElementById('podsumowanie').innerHTML="Przegrałeś gre z komputerem!!!"
		}
		return document.getElementById('koniec').innerHTML = "Koniec gry";
		
		
	}
}

