let movieList = document.querySelector(".movieList");
let movieListSeen = document.querySelector(".movieListSeen");

let movieCount = 1;



function addMovie () {
    const movieTitle = document.querySelector(".movieTitle").value;

    if(movieTitle == "") {    //Vérifier qu'un texte à bien été écrit
        alert("Indiquez le titre de votre film.");
    }
    else { 
        
        movieList.innerHTML += `<li id=${movieCount}>${movieCount} - ${movieTitle} <button id="${movieTitle}" onclick=suppMovie(this.id)>Supprimer</button><button id="${movieTitle}" onclick=addToSeenMovie(this.id)>Vu</button></li>`; // ajouter un film avec un bouton suppr et un bouton vu

        movieCount++;

        document.querySelector(".movieTitle").value = "";   // supprimer le texte dans le input
    }

    if(movieList !== "") {
        document.querySelector(".movieListNoneText").style.display = "none";   // Enlever le texte "pas encore de film ajouté"
    }
}





function suppMovie (id) {
    document.getElementById(id).parentElement.outerHTML = "";
}

function addToSeenMovie (id) {
    document.querySelector(".movieListSeenNoneText").style.display = "none";

    movieListSeen.innerHTML += `<li>${id} <button id="${id}" onclick=suppMovie(this.id)>Supprimer</button>`;
    suppMovie(id);
}

