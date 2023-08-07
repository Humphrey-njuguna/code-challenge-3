function getFilms (){
    fetch ('  http://localhost:3000/films ')
    .then(response => response.json())
    .then(movies=>{
        movies.forEach(element => {
            const showMovie=document.createElement("div")
            showMovie.innerHTML=`
            <div id="myMovie"> 
               <h5>${element.title}</h5>  
               <img src=${element.poster}></img>          
            </div>
            `
            const movieList = document.createElement('li')
            movieList.id="movieList"
            movieList.textContent= element.title
            document.querySelector('#moviesData').appendChild(movieList)
            document.querySelector('#displayArea').appendChild(showMovie)

            
            
        });
        movieDisplay()
    })
}
getFilms()

function movieDisplay (){
    //console.log(movieList[3])
    for (let i=0; i<movieList.length; i++){
        movieList[i].addEventListener("click", ()=>{
            let id =i+1;
            fetch(` http://localhost:3000/films/${id}`)
            .then(response =>response.json())
            .then(singleMovie=> {
               // console.log(singleMovie)
            document.querySelector('#displayArea').remove()
            const selectMovie= document.createElement('div')
            selectMovie.id='displayArea'
            selectMovie.innerHTML=`
            <div>
               <h5>${singleMovie.title}</h5>
               <img src="${singleMovie.poster}"/>
            </div>
            `
            document.querySelector('#body').appendChild(selectMovie)

            })
        })

    } 
}

