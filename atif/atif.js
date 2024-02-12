let pop_left = document.getElementById('pop_song_left')
let pop_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]

pop_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})


let Artists_bx = document.getElementsByClassName('Artists_bx')[0]
let pop_left_art = document.getElementById('pop_left')
let pop_right_art = document.getElementById('pop_right')

pop_right_art.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
})

pop_left_art.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
})




// music.play()

const songs = [
    {
        id: 1,
        songName: `Dehelizz pe mere dil ki jo raatife hai<br>
        <div class="subtitle">Aatif Aslam<</div>`,
        poster: '/atif/img/1.jpg'
    },
    {
        id: 2,
        songName: `Tu Jaane Na - Ajab Prem ki Gajab Khahani<br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster: '/atif/img/2.jpg'
    },
    {
        id:3,
        songName:`Dekhte Dekhte - Batti Gul Metre Chalu <br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster:'/atif/img/3.jpg'
    },
    {
        id:4,
        songName:`Peheli Dafa - Atif Aslam <br>
        <div class="subtitle"> Atif Aslam </div>`,
        poster:'/atif/img/4.jpg'
    },
    {
        id:5,
        songName:`Piya Oo Re Piya<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/5.jpg'
    },
    {
        id:6,
        songName:`Tere Sang Yaara - Rustom<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/6.jpg'
    },
    {
        id:7,
        songName:`Dil Meri Na Sune - Genius<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/7.jpg'
    },
    {
        id: 8,
        songName: `Tera Hua - Atif Aslam<br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster: '/atif/img/2.jpg'
    },
    {
        id:9,
        songName:`Tu Rang Sarbato ka<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/9.jpg'
    },
    {
        id:10,
        songName:`Aaraha hu mai Zindagi<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/10.jpg'
    },
    {
        id:11,
        songName:`Oo Meri Laila - Laila Majnu<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/11.jpg'
    },
    {
        id:12,
        songName:`Jeene Laga Hu Pehele Se Jayada<br>
        <div class="subtitle">Atif Aslam, Shreya Ghoshal</div>`,
        poster:'/shreya/img/21.jpg'

    },
    {
        id:13,
        songName:`Tere Liyeee - Atif Aslam<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/13.jpg'
    },
    {
        id:14,
        songName:`Tootha Jo Kabhi Taara - Flying Jatt<br>
        <div class="subtitle">Atif,Aslam Tulsi Kumar<</div>`,
        poster:'/atif/img/14.jpg'
    },
    {
        id:15,
        songName:`Oo Saathi - Baaghi 2<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/15.jpg'
    },
    {
        id:16,
        songName:`Dil Diya Gallan - Tiger Jinda Hai<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/16.jpg'
    },
    {
        id:17,
        songName:`Tera Hoone Laga Hu<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/17.jpg'
    },
    {
        id:18,
        songName:`Tu Chahiye - Bajrangi Bhaijaan<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/18.jpg'
    },
    {
        id:19,
        songName:`Paniyo Sa - Paniyo Sa<br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster:'/atif/img/19.jpg'
    },
    {
        id:20,
        songName:`Musafir - Sweetie Weds Nri <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/20.jpg'
    },
    {
        id:21,
        songName:`Mere Khuda - Atif Aslam<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/21.jpg'
    },
    {
        id:22,
        songName:`Aa Bhi Jaa Mere Meherbaan<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/22.jpg'
    },
    {
        id:23,
        songName:`Dil Naa Jaane Kyu - Jyonti Bhai Ki Love Story<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/23.jpg'
    },
    {
        id:24,
        songName:`Wajah Tum Ho - Hate Story 3<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/24.jpg'
    },
    {
        id:25,
        songName:`Nit Khair Manda - Atif Aslam<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/25.jpg'
    },
    {
        id:26,
        songName:`Kamariya - Mitroon<br>
        <div class = "subtitle">Dharshan Raval</div>`,
        poster:'/atif/img/26.jpg'
    },
    {
        id:27,
        songName:`Psycho Saiyaan - Shaaho<br>
        <div class = "subtitle">Dhavni Bhanushali</div>`,
        poster:'Dhavni/img/5.jpg'
    },
    {
        id:28,
        songName:`Jannatien Khaana - Jannatt 2<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/1.jpg'
    },
    {
        id:29,
        songName:`Main Jahaan Rahoon - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/5.jpg'
    },
    {
        id:30,
        songName:`Tu Jo Mila - Bajrangi Bhaijaan<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/4.jpg'
    },
   
    {
        id:31,
        songName:`Tum Jo Aaye Zindagi Mai - Once Upon a time In Mumbai<br>
        <div class = "subtitle">Tulsi Kumar</div>`,
        poster:'tulsi/img/2.jpg'
    },
    {
        id:32,
        songName:`Ae Watan - Razzi<br>
        <div class="subtitle">Shunidhi Chaunhan</div>`,
        poster:'/Shunidhi/img/1.jpg'
    },
    {
        id:33,
        songName:`Hum Mar Jaayenge - Aashiqui 2<br>
        <div class = "subtitle">tulsi Kumar</div>`,
        poster:'tulsi/img/1.jpg'
    },
    {
        id:34,
        songName:`Mainu Isqh Da Lagiya Rogg - Tulsi Kumar<br>
        <div class = "subtitle">Tulsi Kumar</div>`,
        poster:'tulsi/img/3.jpg'
    },
    {
        id:35,
        songName:`Ye Tune Kya Kiya - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/1.jpg'
    },
    {
        id:36,
        songName:`Kesariya Song<br>
        <div class="subtitle">Arijit Singh<</div>`,
        poster:'/atif/img/36.jpg'
    },
    {
        id:37,
        songName:`Manike maake Hiite<br>
        <div class="subtitle">Yohani</div>`,
        poster:'/atif/img/37.jpg'
    },
    {
        id:38,
        songName:`Kya itna Bura hu mai maa<br>
        <div class="subtitle">AankaAslamr madhavan<</div>`,
        poster:'/atif/img/38.jpg'
    },
    {
        id:39,
        songName:`Dehelizz pe mere dil ki jo raatife hai<br>
        <div class="subtitle">AatifAslam Aslam<</div>`,
        poster:'/atif/img/39.jpg'
    },
    {
        id:40,
        songName:`Tera Yaar hu mai<br>
        <div class="subtitle">ArijiAslamt Singh<</div>`,
        poster:'/atif/img/40.jpg'
    },
    {
        id:41,
        songName:`Teri mitti mai mil Jawa<br>
        <div class="subtitle">A-PraAslamak<</div>`,
        poster:'/atif/img/41.jpg'
    },
    {
        id:42,
        songName:`Tere Jaisa Yaar Kahan
        <div class="subtitle">ArijiAslamt Singh<</div>`,
        poster:'/atif/img/42.jpg'
    },
    {
        id:43,
        songName:`SaudeBazzi - Javed Ali<br>
        <div class="subtitle">AavedAslam Ali<</div>`,
        poster:'/atif/img/43.jpg'
    },
    {
        id:44,
        songName:`Tarasti hai Nigahe - Azim<br>
        <div class="subtitle">Azim AslamAzhar<</div>`,
        poster:'/atif/img/44.jpg'
    },
    {
        id:45,
        songName:`Saiboo - Shor in the City<br>
        <div class="subtitle">AhuniAslamdhi Ghosal<</div>`,
        poster:'/atif/img/45.jpg'
    },
    {
        id:46,
        songName:`Afreeen Afreeen <br>
        <div class="subtitle">ArijiAslamt Singh<</div>`,
        poster:'/atif/img/46.jpg'
    },
    {
        id:47,
        songName:`Oo Khuda -  Shunidhi<br>
        <div class="subtitle">AhuniAslamdhi Mucchal, Amaal Malik<</div>`,
        poster:'/atif/img/47.jpg'
    },
    {
        id:48,
        songName:`Deva Deva - Arijit Singh<br>
        <div class="subtitle">ArijiAslamt Singh<</div>`,
        poster:'/atif/img/18.jpg'
    },
    {
        id:49,
        songName:`Tu Jaane Na<br>
        <div class="subtitle">AatifAslam Aslam<</div>`,
        poster:'/atif/img/49.jpg'
    },
    {
        id:50,
        songName:`Soch Na Saake - Arijit Singh<br>
        <div class="subtitle">ArijiAslamt Singh<</div>`,
        poster:'/atif/img/50.jpg'
    },
    {
        id:51,
        songName:`Main Royaan - Yassier<br>
        <div class="subtitle">AassiAslamer Deshai<</div>`,
        poster:'/atif/img/51.jpg'
    },
    {
        id:52,
        songName:`Aarariraro Raaro<br>
        <div class="subtitle">AeeptAslami Suresh<</div>`,
        poster:'/atif/img/52.jpg'
    },
    {
        id:53,
        songName:`Aankhon mein teri Ajab Si <br>
        <div class="subtitle">AatifAslam Aslam<</div>`,
        poster:'/atif/img/53.jpg'
    },
    {
        id:54,
        songName:`Tu Pyar Hai Kisi Aur Ka<br>
        <div class="subtitle">AamreAslamet Dutta<</div>`,
        poster:'/atif/img/54.jpg'
    },
    {
        id:55,
        songName:`Dilbar - Nora Fatehi<br>
        <div class="subtitle">Aeha AslamKaatifar<</div>`,
        poster:'/atif/img/55.jpg'
    },
    {
        id: 56,
        songName: `Khaun Tuje - atif<br>
        <div class="subtitle">Atif AslamMucchal<</div>`,
        poster: 'img/56.jpg'
    },
    {
        id: 57,
        songName: `Jeene Laga hu Pehele Se Jayada<br>
        <div class="subtitle">AatifAslam Aslam, atif Ghosal<</div>`,
        poster: 'img/57.jpg'
    },
   

]



const music = new Audio('music/1.mp3')

Array.from(document.getElementsByClassName('song-item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

// Search Data Start 
let Search_result = document.getElementsByClassName('search_results')[0]

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a')
    card.classList.add('card')
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="" srcset="">
    <div class="content">${songName}</div>
    </div>`

    Search_result.appendChild(card)
});

let input = document.getElementsByTagName('input')[0]
input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase()
    let items = Search_result.getElementsByTagName('a')

    for (let i = 0; i < items.length; i++) {
        const e = items[i].getElementsByClassName('content')[0]
        let text_value = e.textContent || e.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = 'flex'
        } else {
            items[i].style.display = 'none'
        }
        if (input_value == 0) {
            Search_result.style.display = 'none'
        } else {
            Search_result.style.display = ""
        }

    }
})

// Search Data End

let playList1 = document.querySelectorAll('.playList')
let masterPlay = document.getElementById('materPlay')
let wave = document.getElementById('wave')
let Title = document.getElementById('title')
let download_music = document.getElementById('tag')

Array.from(document.getElementsByClassName('playList')).forEach((e) => {
    e.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            wave.classList.add('active1')
            masterPlay.classList.remove('bi-play-fill')
            masterPlay.classList.add('bi-pause-fill')

        }
    });
})

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')

    }
    else {
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.remove('bi-pause-fill')
        masterPlay.classList.add('bi-play-fill')
    }
});





let index = 0;
let poster = document.getElementById('poster_play')

makeBackground = () => {
    Array.from(document.getElementsByClassName('song-item')).forEach((e) => {
        e.style.background = 'rgb(105, 105, 170, .0)'
    })
}

makePlay = () => {
    Array.from(document.getElementsByClassName('playList')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    })
}


Array.from(document.getElementsByClassName('playList')).forEach((e) => {
    e.addEventListener('click', (el) => {
        let index = el.target.id;
        music.src = `atif/music/${index}.mp3`;
        poster.src = `atif/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `atif/music/${index}.mp3`

        let songTitle = songs.filter((els) => {
            return els.id == index
        })

        songTitle.forEach(e => {
            let { songName } = e;
            Title.innerHTML = songName
            download_music.setAttribute('download', songName)

        })

        makeBackground()
        Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'

        makePlay();
        wave.classList.add('acitve1')
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')


    })


})


let currentT = document.getElementById('currentTime')
let currentE = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentE.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    currentT.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((music_curr / music_dur) * 100)
    seek.value = progressBar;
    let seekBar = seek.value;

    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`


})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})

let vol = document.getElementById('vol')
let vol_icon = document.getElementById('vol_icon')
let vol_bar = document.getElementsByClassName('vol_bar')[0]
let vol_dot = document.getElementById('bar3')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down')
        vol_icon.classList.add('bi-volume-off-fill')
    }

    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down')
        vol_icon.classList.remove('bi-volume-off-fill')

    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down')
        vol_icon.classList.remove('bi-volume-off-fill')

    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
})

let back = document.getElementById('back')
let next = document.getElementById('next')
let btn = document.getElementById('btn')


back.addEventListener('click', (el) => {
    index = index - 1

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('song-item')).length
    }
    music.src = `atif/amusic/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitle = songs.filter((els) => {
        return els.id == index
    })

    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(165, 165, 110, .1)'

    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')

})
next.addEventListener('click', (el) => {
    index = index + 1
    if (index > Array.from(document.getElementsByClassName('song-item')).length) {
        index = 1
    }

    music.src = `atif/music/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitle = songs.filter((els) => {
        return els.id == index
    })

    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'

    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')

})
btn.addEventListener('click', (el) => {
    index = index + 1
    if (index > Array.from(document.getElementsByClassName('song-item')).length) {
        index = 1
    }

    music.src = `atif/music/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitle = songs.filter((els) => {
        return els.id == index
    })
    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'

    makePlay();
    wave.classList.add('acitve1')

})

let shuffle = document.getElementsByClassName('shuffle')[0]



shuffle.addEventListener('click', () => {

    let a = shuffle.innerHTML;
    switch (a) {
        case 'next':
            shuffle.classList.add('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'repeat'
            break;

        case 'repeat':
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML = 'random'
            break;

        case 'random':
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.add('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'next'
            break;

    }
})


const next_music = () => {
    if (index == songs.length) {
        index = 1
    }
    else {
        index++;
    }
    music.src = `atif/music/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `atif/music/${index}.mp3`
    let songTitle = songs.filter((els) => {
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)
    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'

    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')
}
const random_music = (el) => {
    if (index == songs.length) {
        index = 1
    }
    else {
        index = Math.floor(Math.random() * songs.length + 1)
    }
    music.src = `atif/music/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `atif/music/${index}.mp3`
    let songTitle = songs.filter((els) => {
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'
    makePlay();

    wave.classList.add('acitve1')
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
}
const repeat_music = () => {
    index;
    music.src = `atif/music/${index}.mp3`;
    poster.src = `atif/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `atif/music/${index}.mp3`
    let songTitle = songs.filter((els) => {
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e => {
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index - 1].style.background = 'rgb(105, 105, 170, .3)'
    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')

}



music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;

        case 'next':
            next_music();
            break;

        case 'random':
            random_music();
            break;

    }

})

let menu_active = document.getElementById('menu_active')
let menu = document.getElementsByClassName('menu')[0]
let song1 = document.getElementsByClassName('song')[0]
menu.classList.add('activemenu')

menu_active.addEventListener('click', () => {
    menu.classList.toggle('activemenu')
})
song1.addEventListener('click', () => {

    menu.classList.toggle('activemenu')
})



