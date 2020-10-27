$(document).ready(function (){
    const token = '2eb40d02-5d0d-4bc6-9177-fc72befea752'
    const link = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/'

    var id = window.location.search.replace( '?', '');
    console.log(id)

    $.ajax({
        type: 'GET',
        url: link+id+'/videos',
        headers: {
            "X-API-KEY": token,
            "Accept":" application/json",
        },
        success: function(data) {
            let trailers = data.trailers
            console.log(trailers)

            for (let item of trailers){
                let url = item.url.replace('watch?v=', 'embed/')
                $('.film-trailer').attr('src', url)
            }
        }
    });

    $.ajax({
        type: 'GET',
        url: link+id,
        headers: {
            "X-API-KEY": token,
            "Accept":" application/json",
        },
        success: function(data) {
            console.log(data.data)

            let film = data.data
            $('.film-title').text(film.nameRu + ' / ' + film.nameEn)
            $('.film-desc').text(film.description)
            $('.film-poster').attr('src', film.posterUrl)

            for (let item of film.facts){
                $('.film-facts').append(`
                    <p>`+ item +`</p>
                `)}
        }
    });
})
