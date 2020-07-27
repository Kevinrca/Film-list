let movieList = document.querySelector(".movieList");
let movieListSeen = document.querySelector(".movieListSeen");

const movieListArray = [];
const movieListSeenArray = [];



function addMovie () {
    const movieTitle = document.querySelector(".movieTitle").value;
    
    //Vérifier qu'un texte à bien été écrit
    if(movieTitle == "") {    
        alert("Indiquez le titre de votre film.");
    }
    else { 
        // Mettre de film dans l'array
        movieListArray.push(movieTitle); 
        
        // ajouter un film avec un bouton suppr et un bouton vu
        movieList.innerHTML += 
        `<div class="movieItem">
            <h3>${movieListArray[movieListArray.indexOf(movieTitle)]}</h3>
            <div class="movieItemButtons">
                <button id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=addToSeenMovie(this.id)>Vu</button>
                <button id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=suppMovie(this.id)>Supprimer</button>
            </div>
        </div>`; 
        

        // supprimer le texte dans le input
        document.querySelector(".movieTitle").value = "";   
    }

    if(movieList !== "") {
        
        // Enlever le texte "pas encore de film ajouté"
        document.querySelector(".movieListNoneText").style.display = "none";   
    }
}



function suppMovie (id) {
    let index = movieListArray.indexOf(id);
    
    // Supprimer le film de la liste HTML
    document.getElementById(id).parentElement.parentElement.outerHTML = "";

    // supprimer le film de l'array
    movieListArray.splice(index, 1);
}





function addToSeenMovie (id) {
    document.querySelector(".movieListSeenNoneText").style.display = "none";

    // Ajouter le film dans la liste "Vu"
    movieListSeenArray.push(movieListArray[movieListArray.indexOf(id)]);

    console.log("Films vus " + movieListSeenArray);

    movieListSeen.innerHTML += 
    `<div class="movieItem">
        <h3>${id}</h3>
        <div class="movieItemButtons">
            <button id="${id}" onclick=suppMovieSeen(this.id)>Supprimer</button>
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



// Fonction de proposition de film aléatoire

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

