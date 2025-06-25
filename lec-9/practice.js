const form = document.getElementById("myForm");

form.addEventListener("submit",async(e)=>{
    e.preventDefault(); // stops page reload
    let search = e.target.children[0].value;
    let response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=69440a61`);
    localStorage.setItem("movies",JSON.stringify(response.data.Search))
    createcard();
})

const container = document.getElementById("container");
function createcard(){
    let movies = JSON.parse(localStorage.getItem("movies"));
    container.innerHTML = "";
    movies.forEach(movie=>{
        const div = document.createElement("div");
        div.className="card";
        const img = document.createElement("img");
        img.src = movie.Poster;
        img.className = "movie-banner";
        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`
        div.prepend(img);
        container.append(div);
    });
}
    if(localStorage.getItem("movies")){
        createcard();
    }
    localStorage.removeItem("name");
