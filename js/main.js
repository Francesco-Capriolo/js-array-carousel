const carouselWrapper = document.querySelector('div.carousel');
carouselWrapper.innerHTML += carouselContent;
// § fine aggiunta -->

// Recupero la lista degli elementi del carosello
const carouselElements = document.getElementsByClassName('carousel-element');

// Recupero la lista dei bookmarks (pallini) del carosello
const bookmarkElements = document.getElementsByClassName('circle');

// Aggiungo al primo elemento la classe active per fare si che sia mostrato
carouselElements[0].classList.add('active');
bookmarkElements[0].classList.add('active');
console.log(carouselElements);

// Recupero il bottone
const nextButton = document.querySelector('div.next');

// mi creo una variabile di indice che rappresenti l'immagine mostrata
let activeElement = 0;

nextButton.addEventListener('click', function () {
    //  remove all'immagini corrente la classe active per renderla invisibile
    carouselElements[activeElement].classList.remove('active');

    //  remove al bookmark corrente la classe active per renderla invisibile
    bookmarkElements[activeElement].classList.remove('active');

    // incrementiamo di uno l'indice dell'immagine selezionata
    activeElement++; // activeElement = activeElement + 1 ;

    // aggiungere la classe active all'immagine successiva
    carouselElements[activeElement].classList.add('active');

    // aggiungere la classe active al bookmark successivo
    bookmarkElements[activeElement].classList.add('active');
});