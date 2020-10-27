let listSong = [
    {
       title: 'Играть, чтобы жить. Срыв',
       img: 'https://akniga.org/uploads/media/topic/2019/03/22/09/preview/217cffd2291458bab59a_400x.png',
       link: 'https://t2.akniga.club/b/37702/YwJfhLskHvsSQGP2sYOWMg,,/01. Рус Дмитрий - Играть, чтобы жить. Срыв.mp3'
    },
    {
        title: 'Игра престолов',
        img: 'https://akniga.org/uploads/media/topic/2019/03/22/09/preview/f9273e32b54e799c2167_400x.jpg',
        link: 'https://t2.akniga.club/b/37746/Hsw_TE4V6lwUf--Ai0WgOA,,/01. Мартин Джордж - Игра престолов.mp3'
    }
    ,{
        title: 'Бегающий сейф',
        img: 'https://akniga.org/uploads/media/topic/2019/03/22/09/preview/df2dc1c8d5dc1b0ceb8c_400x.jpg',
        link: 'https://t1.akniga.club/b/39741/Hsw_TE4V6lwUf--Ai0WgOA,,/01. Вишневский Сергей - Бегающий сейф.mp3'
    },
    {
        title: 'Голос ночной птицы',
        img: 'https://akniga.org/uploads/media/topic/2019/03/22/09/preview/2741546535bb6ace79a7_400x.jpg',
        link: 'https://t2.akniga.club/b/40536/Hsw_TE4V6lwUf--Ai0WgOA,,/01. Маккаммон Роберт - Голос ночной птицы.mp3'
    },
    {
        title: 'Глубина. Погружение 1-е',
        img: 'https://akniga.org/uploads/media/topic/2019/03/22/08/preview/3c6cc9b253465be1fd72_400x.jpg',
        link: "https://t1.akniga.club/b/44875/Hsw_TE4V6lwUf--Ai0WgOA,,/01.%20%D0%93%D0%BB%D1%83%D0%B1%D0%B8%D0%BD%D0%B0.%20%D0%9F%D0%BE%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%201-%D0%B5.mp3"
    }
]

let list = document.querySelector('.songs')
console.log(list)

for (let item of listSong){
    console.log(item)
    list.insertAdjacentHTML("afterbegin", `
        <div class="song">
            <img src=`+ item.img +` alt=`+ item.title +`>
            <span>
                `+ item.title +`
            </span>
            <audio>
                <source src=`+ item.link +`>
            </audio>
        </div>
    `);
}

let songs = document.getElementsByClassName('song');
    // songs = Array.prototype.slice.call(songs);

for (let song of songs){
    song.insertAdjacentHTML("beforeend", `
        <div class="btn-play" data-play="false">
            <i class="fas fa-play"></i>
        </div>
    `);
}

let plays = document.getElementsByClassName('btn-play');
    // plays = Array.prototype.slice.call(plays);
    console.log(plays)

for (let play of plays){
    play.addEventListener('click', function (e){
        let element = e.target;
        let audio = element.nextElementSibling

        let alreadyClick = element.getAttribute('data-play')
        console.log(alreadyClick)
        if (alreadyClick === 'false'){
            console.log(play.querySelector('.fas'))
            play.querySelector('.fas').classList.remove('fa-play')
            play.querySelector('.fas').classList.add('fa-pause')

            element.setAttribute('data-play', 'true')
            audio.play()
        }
        else {
            play.querySelector('.fas').classList.add('fa-play')
            play.querySelector('.fas').classList.remove('fa-pause')

            element.setAttribute('data-play', 'false')
            audio.pause()
        }
    });
}



