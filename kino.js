// $(document).ready(function (){
//     const token = '2eb40d02-5d0d-4bc6-9177-fc72befea752'
//     const link = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword'
//
//     $('#search').on('click', function (e){
//         e.preventDefault()
//         let word = $('#input').val()
//         console.log(word);
//         $('.film-item').remove()
//         $.ajax({
//             type: 'GET',
//             url: link+'?keyword='+word,
//             headers: {
//                 "X-API-KEY": token,
//                 "Accept":" application/json",
//             },
//             success: function(data) {
//                 let films = data.films
//                 console.log(films)
//                 for (let item of films){
//                 $('.search-list').append(`
//                     <div class="col-3">
//                         <div class="card film-item">
//                             <img src=`+ item.posterUrlPreview +` class="card-img-top" alt=`+ item.posterUrlPreview +`>
//                             <div class="card-body">
//                                 <h5 class="card-title" title=`+ item.nameRu +`>`+ item.nameRu +` (`+ item.year +`)</h5>
//                                 <p class="card-text"></p>
//                                 <a href="/main.js/film.html?`+ item.filmId +`" class="btn btn-primary">Смотреть</a>
//                             </div>
//                         </div>
//                     </div>
//                 `)}
//             }
//         });
//     });
// })

const xhr = new XMLHttpRequest();
const token = '2eb40d02-5d0d-4bc6-9177-fc72befea752'
const url = new URL('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword')

let btn  = document.querySelector('#search')

btn.addEventListener('click', function (){
    let word = document.querySelector('#input').value
    searchByWord(word, url)
})

function searchByWord(word, url){

    url.searchParams.set('keyword', word);
    xhr.open('GET', url, true)

    xhr.setRequestHeader("Accept"," application/json")
    xhr.setRequestHeader("X-API-KEY", token)

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let films = JSON.parse(xhr.response)
            console.log(films.films)
            films = films.films

            let oldFilms = document.querySelectorAll('.film-item');

            for ( let item of oldFilms){
                item.parentNode.removeChild(item)
            }

            for (let item of films){
                document.querySelector('.search-list').insertAdjacentHTML('beforeend',`
                <div class="col-3">
                    <div class="card film-item">
                        <img src=`+ item.posterUrlPreview +` class="card-img-top" alt=`+ item.posterUrlPreview +`>
                        <div class="card-body">
                            <h5 class="card-title" title=`+ item.nameRu +`>`+ item.nameRu +` (`+ item.year +`)</h5>
                            <p class="card-text"></p>
                            <a href="/main.js/film.html?`+ item.filmId +`" class="btn btn-primary">Смотреть</a>
                        </div>
                    </div>
                </div>
        `)}
        }
    };

    xhr.send()
}


