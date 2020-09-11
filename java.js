        let movies;
        let filter = "alle";
        document.addEventListener("DOMContentLoaded", hentdata)

        // 2PACX-1vSGuox_61lOs9uKSEo1WLMP2fxjH6Q_4CLdmDUH-Rb-TOjT2jbw49cfom7HFRI8KmV5lXWKU79Me2TN

        async function hentdata() {
            const JASONData = await fetch("https://spreadsheets.google.com/feeds/list/1x0pdtxNhVAvS_mK4VcyHojs1tc7UIEzpadqQLCLP6Wg/od6/public/values?alt=json");
            movies = await JASONData.json();
            addEventListenersToButtons();
            visMenu();
        }

        function visMenu() {
            console.log(movies);

            const templatePointer = document.querySelector("template");
            const listPointer = document.querySelector("#list");
            const popop = document.querySelector("#popop");

            listPointer.innerHTML = "";

            movies.feed.entry.forEach(movie => {
                if (filter == "alle" || filter == movie.gsx$genre.$t) {
                    console.log(movie);

                    const klon = templatePointer.cloneNode(true).content;
                    //klon.querySelector(".navn").textContent = navn.gsx$år.$t;

                    //                    klon.querySelector(".køn").textContent = "Kategori: " + navn.gsx$kategori.$t;
                    //                    klon.querySelector(".pris").textContent = "Pris: " + navn.gsx$pris.$t + " kr";
                    //                    klon.querySelector(".beskrivelse").textContent = "Beskrivelse: " + navn.gsx$kort.$t;
                    klon.querySelector("img").src = movie.gsx$billede.$t;

                    klon.querySelector("article").addEventListener("click", () => visDetaljer(movie))
                    listPointer.appendChild(klon);

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
