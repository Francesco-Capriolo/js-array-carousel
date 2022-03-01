// Recupero la lista degli elementi del carosello
const carouselElements = document.getElementsByClassName('carousel-element');
const carouselImgLeft = document.getElementsByClassName('carousel-left');

// Recupero la lista dei bookmarks (pallini) del carosello
const bookmarkElements = document.getElementsByClassName('circle');

// Aggiungo al primo elemento la classe active per fare si che sia mostrato
bookmarkElements[0].classList.add('active');

//aggiungo il bordo
carouselImgLeft[0].classList.add("img-thumbnail");
console.log(carouselElements);

// Recupero il bottone
const nextButton = document.querySelector('div.next');

// mi creo una variabile di indice che rappresenti l'immagine mostrata
let activeElement = 0;

nextButton.addEventListener('click', function () {
    if (activeElement < 4) {
        //  remove all'immagini corrente la classe d-block 
        carouselElements[activeElement].classList.remove('d-block');

        //aggiungo la classe d-none per renderla invisibile
        carouselElements[activeElement].classList.add('d-none');

        //  remove al bookmark corrente la classe active per renderla invisibile
        bookmarkElements[activeElement].classList.remove('active');

        //rimuovo il bordo
        carouselImgLeft[activeElement].classList.remove("img-thumbnail");

        //aggiungo l'opacity
        carouselImgLeft[activeElement].classList.add("opacity-50");

        // incrementiamo di uno l'indice dell'immagine selezionata
        activeElement++; // activeElement = activeElement + 1 ;

        //rimuovo la classe d-none
        carouselElements[activeElement].classList.remove('d-none');

        // aggiungere la classe active all'immagine successiva
        carouselElements[activeElement].classList.add('d-block');

        // aggiungere la classe active al bookmark successivo
        bookmarkElements[activeElement].classList.add('active');

        //rimuovo il bordo
        carouselImgLeft[activeElement].classList.add("img-thumbnail");

        //aggiungo l'opacity
        carouselImgLeft[activeElement].classList.remove("opacity-50");
    }

});

const previusButton = document.querySelector('div.previus');

previusButton.addEventListener('click', function () {
    if (activeElement > 0) {
        //  remove all'immagini corrente la classe d-block 
        carouselElements[activeElement].classList.remove('d-block');

        //aggiungo la classe d-none per renderla invisibile
        carouselElements[activeElement].classList.add('d-none');

        //  remove al bookmark corrente la classe active per renderla invisibile
        bookmarkElements[activeElement].classList.remove('active');

        //rimuovo il bordo
        carouselImgLeft[activeElement].classList.remove("img-thumbnail");

        //aggiungo l'opacity
        carouselImgLeft[activeElement].classList.add("opacity-50");

        // incrementiamo di uno l'indice dell'immagine selezionata
        activeElement--; // activeElement = activeElement + 1 ;

        //rimuovo la classe d-none
        carouselElements[activeElement].classList.remove('d-none');

        // aggiungere la classe active all'immagine successiva
        carouselElements[activeElement].classList.add('d-block');

        // aggiungere la classe active al bookmark successivo
        bookmarkElements[activeElement].classList.add('active');

        //rimuovo il bordo
        carouselImgLeft[activeElement].classList.add("img-thumbnail");

        //aggiungo l'opacity
        carouselImgLeft[activeElement].classList.remove("opacity-50");
    }
});