let movies;
let filter = "alle";
document.addEventListener("DOMContentLoaded", hentdata)

// 2PACX-1vSGuox_61lOs9uKSEo1WLMP2fxjH6Q_4CLdmDUH-Rb-TOjT2jbw49cfom7HFRI8KmV5lXWKU79Me2TN


//Fetcher googlescheet data vha jason. Og bestemmer variablen movies
//Sætter variablen movies til at indeholde den fetchede jason
async function hentdata() {
    const JASONData = await fetch("https://spreadsheets.google.com/feeds/list/1Z9EjUVYxqOJ6Ic7Ibk4ox5qTcQjp845ygT3AaYKT_8c/od6/public/values?alt=json");
    movies = await JASONData.json();
    addEventListenersToButtons();
    visMenu();
}


function visMenu() {
    console.log(movies);
    const templatePointer = document.querySelector("#templatepointerfilm");
    const listPointer = document.querySelector("#all_movies");
    const premierePointer = document.querySelector("#premiere");
    const horrorPointer = document.querySelector("#horror");
    const romanticPointer = document.querySelector("#romantic");
    const animationPointer = document.querySelector("#animation");
    const documentaryPointer = document.querySelector("#documentary");
    const comedyPointer = document.querySelector("#comedy");
    const popop = document.querySelector("#popop");

    listPointer.innerHTML = "";
    premierePointer.innerHTML = "";
    horrorPointer.innerHTML = "";
    romanticPointer.innerHTML = "";
    animationPointer.innerHTML = "";
    documentaryPointer.innerHTML = "";
    comedyPointer.innerHTML = "";

    document.querySelector("#premierebtn").addEventListener("click", visPremiere);
    document.querySelector("#romanticbtn").addEventListener("click", visRomantic);
    document.querySelector("#animationbtn").addEventListener("click", visAnimation);
    document.querySelector("#comedybtn").addEventListener("click", visComedy);
    document.querySelector("#horror").addEventListener("click", visHorror);
    document.querySelector("#documentarybtn").addEventListener("click", visDocumentary);

    document.querySelector("#premierebtn").classList.remove("hide");
    document.querySelector("#premiere_section").classList.add("section_grid");
    document.querySelector("#premiere").classList.add("scroll");
    document.querySelector("#premiere").classList.remove("vis_alle_genre");

    document.querySelector("#romanticbtn").classList.remove("hide");
    document.querySelector("#romantic_section").classList.add("section_grid");
    document.querySelector("#romantic").classList.add("scroll");
    document.querySelector("#romantic").classList.remove("vis_alle_genre");

    document.querySelector("#animationbtn").classList.remove("hide");
    document.querySelector("#animation_section").classList.add("section_grid");
    document.querySelector("#animation").classList.add("scroll");
    document.querySelector("#animation").classList.remove("vis_alle_genre");

    document.querySelector("#comedybtn").classList.remove("hide");
    document.querySelector("#comedy_section").classList.add("section_grid");
    document.querySelector("#comedy").classList.add("scroll");
    document.querySelector("#comedy").classList.remove("vis_alle_genre");

    document.querySelector("#horrorbtn").classList.remove("hide");
    document.querySelector("#horror_section").classList.add("section_grid");
    document.querySelector("#horror").classList.add("scroll");
    document.querySelector("#horror").classList.remove("vis_alle_genre");

    document.querySelector("#documentarybtn").classList.remove("hide");
    document.querySelector("#documentary_section").classList.add("section_grid");
    document.querySelector("#documentary").classList.add("scroll");
    document.querySelector("#documentary").classList.remove("vis_alle_genre");


    //løber loop igennem array liste i jason og filterere udfra alle eller genre
    movies.feed.entry.forEach(movie => {
        if (filter == "alle" || filter == movie.gsx$genre.$t) {
            console.log(movie);

            // Hvis genre er premiere tilføjes kun billeder fra denne genre
            // Tilføjer template med img til article
            // Ved click på article starter functionen visDetaljer med popop
            // Dette gøres med alle genre
            if (movie.gsx$genre.$t == "Premiere") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;

                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))

                premierePointer.appendChild(klon);

            }

            if (movie.gsx$genre.$t == "Romantic") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;


                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie));
                romanticPointer.appendChild(klon);

            }

            if (movie.gsx$genre.$t == "Animation") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;


                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie));
                animationPointer.appendChild(klon);
            }


            if (movie.gsx$genre.$t == "Comedy") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;


                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie));
                comedyPointer.appendChild(klon);
            }

            if (movie.gsx$genre.$t == "Horror") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;


                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie));
                horrorPointer.appendChild(klon);

            }
            if (movie.gsx$genre.$t == "Documentary") {
                console.log(movie);

                const klon = templatePointer.cloneNode(true).content;

                klon.querySelector("img").src = movie.gsx$billede.$t;


                klon.querySelector("article").addEventListener("click", () => visDetaljer(movie));
                documentaryPointer.appendChild(klon);

            }
        }
    })
}


document.querySelector("#luk").addEventListener("click", () => popop.style.display = "none");

//ved click på #premierebtn mf. starter funktionen visPremiere mf.
function visPremiere() {
    console.log(visPremiere);

    //Fjernr sectioner som ikke skal vises.
    //I premiere remover vi hide, og adder hide til de andre sectioner.
    //De ander funtioner som vises ved click fungere på samme måde.
    document.querySelector("#premiere_section").classList.remove("hide");
    document.querySelector("#romantic_section").classList.add("hide");
    document.querySelector("#animation_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.add("hide");
    document.querySelector("#horror_section").classList.add("hide");
    document.querySelector("#documentary_section").classList.add("hide");


    //fjerner og tilføjer classes så grid ændres fra at man scroller til at alle film i genren vises.
    //i visMenu resetter vi alle classes.
    document.querySelector("#premierebtn").classList.add("hide");
    document.querySelector("#premiere_section").classList.remove("section_grid");
    document.querySelector("#premiere").classList.remove("scroll");
    document.querySelector("#premiere").classList.add("vis_alle_genre");
}

function visRomantic() {
    console.log(visRomantic);


    document.querySelector("#romantic_section").classList.remove("hide");
    document.querySelector("#premiere_section").classList.add("hide");
    document.querySelector("#animation_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.add("hide");
    document.querySelector("#horror_section").classList.add("hide");
    document.querySelector("#documentary_section").classList.add("hide");

    document.querySelector("#romanticbtn").classList.add("hide");
    document.querySelector("#romantic_section").classList.remove("section_grid");
    document.querySelector("#romantic").classList.remove("scroll");
    document.querySelector("#romantic").classList.add("vis_alle_genre");


}

function visAnimation() {
    console.log(visAnimation);


    document.querySelector("#animation_section").classList.remove("hide");
    document.querySelector("#premiere_section").classList.add("hide");
    document.querySelector("#romantic_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.add("hide");
    document.querySelector("#horror_section").classList.add("hide");
    document.querySelector("#documentary_section").classList.add("hide");

    document.querySelector("#animationbtn").classList.add("hide");
    document.querySelector("#animation_section").classList.remove("section_grid");
    document.querySelector("#animation").classList.remove("scroll");
    document.querySelector("#animation").classList.add("vis_alle_genre");

}

function visComedy() {
    console.log(visComedy);

    document.querySelector("#animation_section").classList.add("hide");
    document.querySelector("#premiere_section").classList.add("hide");
    document.querySelector("#romantic_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.remove("hide");
    document.querySelector("#horror_section").classList.add("hide");
    document.querySelector("#documentary_section").classList.add("hide");

    document.querySelector("#comedybtn").classList.add("hide");
    document.querySelector("#comedy_section").classList.remove("section_grid");
    document.querySelector("#comedy").classList.remove("scroll");
    document.querySelector("#comedy").classList.add("vis_alle_genre");
}


function visHorror() {
    console.log(visHorror);

    document.querySelector("#horror_section").classList.remove("hide");
    document.querySelector("#premiere_section").classList.add("hide");
    document.querySelector("#romantic_section").classList.add("hide");
    document.querySelector("#animation_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.add("hide");
    document.querySelector("#documentary_section").classList.add("hide");

    document.querySelector("#horrorbtn").classList.add("hide");
    document.querySelector("#horror_section").classList.remove("section_grid");
    document.querySelector("#horror").classList.remove("scroll");
    document.querySelector("#horror").classList.add("vis_alle_genre");

}

function visDocumentary() {
    console.log(visDocumentary);

    document.querySelector("#documentary_section").classList.remove("hide");
    document.querySelector("#premiere_section").classList.add("hide");
    document.querySelector("#romantic_section").classList.add("hide");
    document.querySelector("#animation_section").classList.add("hide");
    document.querySelector("#comedy_section").classList.add("hide");
    document.querySelector("#horror_section").classList.add("hide");

    document.querySelector("#documentarybtn").classList.add("hide");
    document.querySelector("#documentary_section").classList.remove("section_grid");
    document.querySelector("#documentary").classList.remove("scroll");
    document.querySelector("#documentary").classList.add("vis_alle_genre");

}


function visDetaljer(movie) {
    console.log(movie);
    popop.style.display = "block";
    popop.querySelector(".genre").textContent = movie.gsx$genre.$t;
    popop.querySelector(".navn").textContent = movie.gsx$navn.$t;
    popop.querySelector(".beskrivelse").textContent = movie.gsx$beskrivelse.$t;
    popop.querySelector(".aar").textContent = movie.gsx$år.$t;
    popop.querySelector(".spilletid").textContent = movie.gsx$spilletid.$t;
    popop.querySelector(".alder").textContent = movie.gsx$alder.$t;
    popop.querySelector(".imdb").textContent = movie.gsx$imdb.$t;
    popop.querySelector(".skuespillere").textContent = movie.gsx$skuespillere.$t;
    popop.querySelector("img").src = movie.gsx$billede.$t;

}


function addEventListenersToButtons() {
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}

function filterBTNs() {
    filter = this.dataset.genre;

    //Ændrer overskrift til den gældende section som trykkes på.
    document.querySelector("#emne").textContent = this.textContent;

    // Remover hide til alle sectioner når man trykker på filteret "alle".
    // Hvis der trykkes på andet end "alle", addes hide til alle sectioner.
    if (filter == "alle") {
        document.querySelector("#premiere_section").classList.remove("hide");
        document.querySelector("#romantic_section").classList.remove("hide");
        document.querySelector("#animation_section").classList.remove("hide");
        document.querySelector("#comedy_section").classList.remove("hide");
        document.querySelector("#horror_section").classList.remove("hide");
        document.querySelector("#documentary_section").classList.remove("hide");
    } else {
        document.querySelector("#premiere_section").classList.add("hide");
        document.querySelector("#romantic_section").classList.add("hide");
        document.querySelector("#animation_section").classList.add("hide");
        document.querySelector("#comedy_section").classList.add("hide");
        document.querySelector("#horror_section").classList.add("hide");
        document.querySelector("#documentary_section").classList.add("hide");

        //den section som er trykket på, fjerner hide på gældende section.
        if (this.dataset.genre == "Premiere") {
            document.querySelector("#premiere_section").classList.remove("hide");

        } else if (this.dataset.genre == "Romantic") {
            document.querySelector("#romantic_section").classList.remove("hide");
        } else if (this.dataset.genre == "Animation") {
            document.querySelector("#animation_section").classList.remove("hide");
        } else if (this.dataset.genre == "Comedy") {
            document.querySelector("#comedy_section").classList.remove("hide");
        } else if (this.dataset.genre == "Horror") {
            document.querySelector("#horror_section").classList.remove("hide");
        } else if (this.dataset.genre == "Documentary")
            document.querySelector("#documentary_section").classList.remove("hide");
    }

    visMenu();
}
