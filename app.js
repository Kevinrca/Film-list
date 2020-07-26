let movieList = document.querySelector(".movieList");
let movieListSeen = document.querySelector(".movieListSeen");





function addMovie () {
    const movieTitle = document.querySelector(".movieTitle").value;

    if(movieTitle == "") {
        alert("Indiquez le titre de votre film.");
    }
    else {        // Ajoute le film à la liste avec un bouton supprimer et un bouton vu 
        movieList.innerHTML += `<li>${movieTitle} <button id="${movieTitle}" onclick=suppMovie(this.id)>Supprimer</button><button id="${movieTitle}" onclick=addToSeenMovie(this.id)>Vu</button></li>`;
    }
}








function suppMovie (id) {
    document.getElementById(id).parentElement.outerHTML = "";
}

function addToSeenMovie (id) {
    movieListSeen.innerHTML += `<li>${id} <button id="${id}" onclick=suppMovie(this.id)>Supprimer</button>`;
    suppMovie(id);
}

