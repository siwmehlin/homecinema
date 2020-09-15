        let movies;
        let filter = "alle";
        document.addEventListener("DOMContentLoaded", hentdata)

        // 2PACX-1vSGuox_61lOs9uKSEo1WLMP2fxjH6Q_4CLdmDUH-Rb-TOjT2jbw49cfom7HFRI8KmV5lXWKU79Me2TN

        async function hentdata() {
            const JASONData = await fetch("https://spreadsheets.google.com/feeds/list/1Z9EjUVYxqOJ6Ic7Ibk4ox5qTcQjp845ygT3AaYKT_8c/od6/public/values?alt=json");
            movies = await JASONData.json();
            addEventListenersToButtons();
            visMenu();
        }

        function toggleMenu() {
            console.log("toggleMenu");

            document.querySelector("#menu").classList.toggle("hidden");

            let erSkjult = document.querySelector("#menu").classList.contains("hidden")

            if (erSkjult == true) {
                document.querySelector("#menuknap").textContent = "☰";

            } else {
                document.querySelector("#menuknap").textContent = "X";
            }
        }


        function visMenu() {
            console.log(movies);

            const templatePointer = document.querySelector("template");
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



            movies.feed.entry.forEach(movie => {
                if (filter == "alle" || filter == movie.gsx$genre.$t) {
                    console.log(movie);


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

                        klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                        romanticPointer.appendChild(klon);

                    }
                    if (movie.gsx$genre.$t == "Animation") {
                        console.log(movie);

                        const klon = templatePointer.cloneNode(true).content;

                        klon.querySelector("img").src = movie.gsx$billede.$t;

                        klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                        animationPointer.appendChild(klon);
                    }


                    if (movie.gsx$genre.$t == "Comedy") {
                        console.log(movie);

                        const klon = templatePointer.cloneNode(true).content;

                        klon.querySelector("img").src = movie.gsx$billede.$t;

                        klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                        comedyPointer.appendChild(klon);
                    }

                    if (movie.gsx$genre.$t == "Horror") {
                        console.log(movie);

                        const klon = templatePointer.cloneNode(true).content;

                        klon.querySelector("img").src = movie.gsx$billede.$t;

                        klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                        horrorPointer.appendChild(klon);

                    }
                    if (movie.gsx$genre.$t == "Documentary") {
                        console.log(movie);

                        const klon = templatePointer.cloneNode(true).content;

                        klon.querySelector("img").src = movie.gsx$billede.$t;


                        klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                        documentaryPointer.appendChild(klon);

                    }
                }


            })

        }


        document.querySelector("#luk").addEventListener("click", () => popop.style.display = "none");


        function visDetaljer(movie) {
            console.log(movie);
            popop.style.display = "block";
            popop.querySelector(".genre").textContent = movie.gsx$genre.$t;
            popop.querySelector(".navn").textContent = movie.gsx$navn.$t;
            popop.querySelector(".beskrivelse").textContent = movie.gsx$beskrivelse.$t;
            popop.querySelector(".år").textContent = movie.gsx$år.$t;
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
            document.querySelector("#emne").textContent = this.textContent;


            if (filter == "alle") {
                document.querySelector("#premiere_section").classList.remove("hide");
                document.querySelector("#romantic_section").classList.remove("hide");
                document.querySelector("#animation_section").classList.remove("hide");
                document.querySelector("#comedy_section").classList.remove("hide");
                document.querySelector("#horror_section").classList.remove("hide");
                document.querySelector("#documentary_section").classList.remove("hide");
            } else if (this.dataset.genre == "Premiere") {
                document.querySelector("#premiere_section").classList.remove("hide");
                document.querySelector("#romantic_section").classList.add("hide");
                document.querySelector("#animation_section").classList.add("hide");
                document.querySelector("#comedy_section").classList.add("hide");
                document.querySelector("#horror_section").classList.add("hide");
                document.querySelector("#documentary_section").classList.add("hide");
            } else if (this.dataset.genre == "Romantic") {
                document.querySelector("#premiere_section").classList.add("hide");
                document.querySelector("#romantic_section").classList.remove("hide");
                document.querySelector("#animation_section").classList.add("hide");
                document.querySelector("#comedy_section").classList.add("hide");
                document.querySelector("#horror_section").classList.add("hide");
                document.querySelector("#documentary_section").classList.add("hide");
            } else if (this.dataset.genre == "Animation") {
                document.querySelector("#premiere_section").classList.add("hide");
                document.querySelector("#romantic_section").classList.add("hide");
                document.querySelector("#animation_section").classList.remove("hide");
                document.querySelector("#comedy_section").classList.add("hide");
                document.querySelector("#horror_section").classList.add("hide");
                document.querySelector("#documentary_section").classList.add("hide");
            } else if (this.dataset.genre == "Comedy") {
                document.querySelector("#premiere_section").classList.add("hide");
                document.querySelector("#romantic_section").classList.add("hide");
                document.querySelector("#animation_section").classList.add("hide");
                document.querySelector("#comedy_section").classList.remove("hide");
                document.querySelector("#horror_section").classList.add("hide");
                document.querySelector("#documentary_section").classList.add("hide");
            } else if (this.dataset.genre == "Horror") {
                document.querySelector("#premiere_section").classList.add("hide");
                document.querySelector("#romantic_section").classList.add("hide");
                document.querySelector("#animation_section").classList.add("hide");
                document.querySelector("#comedy_section").classList.add("hide");
                document.querySelector("#horror_section").classList.remove("hide");
                document.querySelector("#documentary_section").classList.add("hide");
            } else if (this.dataset.genre == "Documentary") {
                document.querySelector("#premiere_section").classList.add("hide");
                document.querySelector("#romantic_section").classList.add("hide");
                document.querySelector("#animation_section").classList.add("hide");
                document.querySelector("#comedy_section").classList.add("hide");
                document.querySelector("#horror_section").classList.add("hide");
                document.querySelector("#documentary_section").classList.remove("hide");
            }





            visMenu();
        }
