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

            visMenu();
        }

        function filterGenreBTNs() {

        }
        //
        //        function clickGenreBTN() {
        //            console.log(displayGenreBTN);
        //
        //            if (movie.gsx$genre.$t == "Premiere") {
        //                document.querySelector(".genretxt1").addEventListener("click", displayGenreBTN);
        //
        //            }
        //
        //            if (movie.gsx$genre.$t == "Romantic") {
        //                document.querySelector(".genretxt2").addEventListener("click", displayGenreBTN);
        //
        //            }
        //
        //            if (movie.gsx$genre.$t == "Animation") {
        //                document.querySelector(".genretxt3").addEventListener("click", displayGenreBTN);
        //
        //            }
        //
        //            if (movie.gsx$genre.$t == "Comedy") {
        //                document.querySelector(".genretxt4").addEventListener("click", displayGenreBTN);
        //
        //            }
        //
        //            if (movie.gsx$genre.$t == "Horror") {
        //                document.querySelector(".genretxt5").addEventListener("click", displayGenreBTN);
        //
        //            }
        //
        //            if (movie.gsx$genre.$t == "Documentary") {
        //                document.querySelector(".genretxt6").addEventListener("click", displayGenreBTN);
        //            }
        //        }
        //
        //
        //        function displayGenreBTN() {
        //            console.log(displayGenreBTN);
        //            document.querySelector(".genretxt6").classList.add("hide");
        //            document.querySelector(".genretxt5").classList.add("hide");
        //            document.querySelector(".genretxt4").classList.add("hide");
        //            document.querySelector(".genretxt3").classList.add("hide");
        //            document.querySelector(".genretxt2").classList.add("hide");
        //            document.querySelector(".genretxt1").classList.add("hide");
        //        }




        document.querySelector("#menuknap").addEventListener("click", toggleMenu);


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
