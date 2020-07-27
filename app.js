let movieList = document.querySelector(".movieList");
let movieListSeen = document.querySelector(".movieListSeen");

let movieListArray = [];



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
        movieList.innerHTML += `<li>${movieListArray[movieListArray.indexOf(movieTitle)]}
        <button id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=suppMovie(this.id)>Supprimer</button>
        <button id="${movieListArray[movieListArray.indexOf(movieTitle)]}" onclick=addToSeenMovie(this.id)>Vu</button></li>`; 
        

        // supprimer le texte dans le input
        document.querySelector(".movieTitle").value = "";   
    }


    if(movieList !== "") {
        
        // Enlever le texte "pas encore de film ajouté"
        document.querySelector(".movieListNoneText").style.display = "none";   
    }
}





function suppMovie (id) {
    // Prendre l'index du film à supprimer
    let index = movieListArray.indexOf(id);
    
    // Supprimer le film de la liste HTML
    document.getElementById(id).parentElement.outerHTML = "";

    // supprimer le film de l'array
    movieListArray.splice(index, 1);
}



function addToSeenMovie (id) {
    document.querySelector(".movieListSeenNoneText").style.display = "none";

    movieListSeen.innerHTML += `<li>${id} <button id="${id}" onclick=suppMovie(this.id)>Supprimer</button>`;
    suppMovie(id);
}

