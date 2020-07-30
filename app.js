let movieList = document.querySelector(".movieList");
let movieListSeen = document.querySelector(".movieListSeen");

const movieListArray = [];
const movieListSeenArray = [];


// Afficher la liste des films dans le localStorage
function movieListInitialisation() {
    for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    movieListArray.push(localStorage.getItem(key));

    movieList.innerHTML += 
        `<div class="movieItem">
            <h3>${movieListArray[movieListArray.indexOf(key)]}</h3>
            <div class="movieItemButtons">
                <img src="images/icones/checkmark.png" id="${movieListArray[movieListArray.indexOf(key)]}" onclick=addToSeenMovie(this.id)>
                <img src="images/icones/poubelle.png" id="${movieListArray[movieListArray.indexOf(key)]}" onclick=suppMovie(this.id)>
            </div>
        </div>`;
    }
    if(movieListArray.length !== 0) {
        document.querySelector(".movieListNoneText").style.display = "none";
    }
}

movieListInitialisation();





function addMovie () {
    const movieTitle = document.querySelector(".movieTitle").value;
    
    //Vérifier qu'un texte à bien été écrit
    if(movieTitle == "") {    
        alert("Indiquez le titre de votre film.");
    }
    else { 
        // Mettre de film dans l'array
        localStorage.setItem(movieTitle, movieTitle);
        movieListArray.push(movieTitle); 
        
        // ajouter un film avec un bouton suppr et un bouton vu
        movieList.innerHTML += 
        `<div class="movieItem">
            <h3>${movieListArray[movieListArray.indexOf(movieTitle)]}</h3>
            <div class="movieItemButtons">
                <img src="images/icones/checkmark.png" id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=addToSeenMovie(this.id)>
                <img src="images/icones/poubelle.png" id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=suppMovie(this.id)>
            </div>
        </div>`; 
        
        // supprimer le texte dans le input
        document.querySelector(".movieTitle").value = "";   
    }

    if(movieListArray.length !== 0) {
        
        // Enlever le texte "pas encore de film ajouté"
        document.querySelector(".movieListNoneText").style.display = "none";   
    }
}



function suppMovie (id) {
    let index = movieListArray.indexOf(id);
    
    // Supprimer le film de la liste HTML
    document.getElementById(id).parentElement.parentElement.outerHTML = "";

    localStorage.removeItem(id);

    // supprimer le film de l'array
    movieListArray.splice(index, 1);
}





function addToSeenMovie (id) {
    document.querySelector(".movieListSeenNoneText").style.display = "none";

    // Ajouter le film dans la liste "Vu"
    movieListSeenArray.push(movieListArray[movieListArray.indexOf(id)]);

    movieListSeen.innerHTML += 
    `<div class="movieItem">
        <h3>${id}</h3>
        <div class="movieItemButtons">
            <img src="images/icones/poubelle.png" id="${id}" onclick=suppMovieSeen(this.id)>
        </div>
    </div>`;
    
    suppMovie(id);
}

function suppMovieSeen (id) {
    let index = movieListSeenArray.indexOf(id);
    
    // Supprimer le film de la liste HTML
    document.getElementById(id).parentElement.parentElement.outerHTML = "";

    // supprimer le film de l'array
    movieListSeenArray.splice(index, 1);
}



// Proposition de film aléatoire

let movieRandom = document.querySelector(".randomMovie p");
let movieRandomButton = document.querySelector(".randomMovieButton");

movieRandomButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * movieListArray.length);

    if(movieListArray.length > 0) {
        movieRandom.innerHTML = movieListArray[randomNumber];
    }
    else {
        movieRandom.innerHTML = "Vous n'avez pas de film dans votre liste";
    }
});

