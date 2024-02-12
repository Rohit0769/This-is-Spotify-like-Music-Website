let pop_left = document.getElementById('pop_song_left')
let pop_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]

pop_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

pop_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})


let Artists_bx = document.getElementsByClassName('Artists_bx')[0]
let pop_left_art = document.getElementById('pop_left')
let pop_right_art = document.getElementById('pop_right')

pop_right_art.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
})

pop_left_art.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
})




// music.play()

const songs = [
    {
        id:1,
        songName:`Levitating - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/1.jpg'
    },
    {
        id:2,
        songName:`One Kiss - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/2.jpg'
    },
    {
        id:3,
        songName:`New Rules - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/3.jpg'
    },
    {
        id:4,
        songName:`No Lie - Ft. Sean Paul<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/4.jpg'
    },
    {
        id:5,
        songName:`Love Again - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/5.jpg'
    },
    {
        id:6,
        songName:`Break My Own Heart - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/6.jpg'
    },
    {
        id:7,
        songName:`Don't Start Now - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/7.jpg'
    },
    {
        id:8,
        songName:`Physical - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/8.jpg'
    },
    {
        id:9,
        songName:`IDQAF - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/9.jpg'
    },
    {
        id:10,
        songName:`Be The One - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/10.jpg'
    },
    {
        id:11,
        songName:`Blow Your Mind - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/11.jpg'
    },
    {
        id:12,
        songName:`Kiss And Make Up - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/12.jpg'
    },
    {
        id:13,
        songName:`Un Dia - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/13.jpg'
    },
    {
        id:14,
        songName:`Yor Are Good - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/14.jpg'
    },
    {
        id:15,
        songName:`Electricity - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/15.jpg'
    },
  
    {
        id:16,
        songName:`Sweetest Pie - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/16.jpg'
    },
    {
        id:17,
        songName:`Hallucinate - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/17.jpg'
    },
    {
        id:18, 
        songName:`Lost In Your Light<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/18.jpg'
    },
    {
        id:19,
        songName:`Last Dance - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/19.jpg'
    },
    {
        id:20,
        songName:`Fever - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/20.jpg'
    },
    {
        id:21,
        songName:`Swang Song - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/21.jpg'
    },
    {
        id:22,
        songName:`Hotter Than Hell - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/22.jpg'
    },
    {
        id:23,
        songName:`Break My Heart - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/23.jpg'
    },
    {
        id:24,
        songName:`Cold Heart - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/24.jpg'
    },
    {
        id:25,
        songName:`Pretty Please - Dua Lipa<br>
        <div class = "subtitle">Dua Lipa</div>`,
        poster:'Dua/img/25.jpg'
    },
   
    {
        id:26,
        songName:`See You Again - Fast and Furious 7<br>
        <div class = "subtitle">Wiz Khalifa</div>`,
        poster:'Dua/img/26.jpg'
    },
    {
        id:27,
        songName:`Senorita - Shawn Mendes<br>
        <div class = "subtitle">Shawn Mendes</div>`,
        poster:'Dua/img/27.jpg'
    },
    {
        id:28,
        songName:`Girls Like You - Maroon 5<br>
        <div class = "subtitle">Maroon 5</div>`,
        poster:'Dua/img/28.jpg'
    },
    {
        id:29,
        songName:`On My Way - Alan Walker<br>
        <div class = "subtitle">Alan Walker</div>`,
        poster:'walker/img/3.jpg'
    },
    {
        id:30,
        songName:`Despacito - Luis Fonsi<br>
        <div class = "subtitle">Luis Fonsi</div>`,
        poster:'Dua/img/30.jpg'
    },
    {
        id:31,
        songName:`Let Me Down Slowly - Alec Benjamin<br>
        <div class = "subtitle">Alec Benjamin</div>`,
        poster:'Dua/img/31.jpg'
    },
    {
        id:32,
        songName:`Send My Love - Adele<br>
        <div class = "subtitle">Adele</div>`,
        poster:'Dua/img/32.jpg'
    },
    {
        id:33,
        songName:`Symphony - Clean Bandit<br>
        <div class = "subtitle">Sankar madhavan</div>`,
        poster:'Dua/img/33.jpg'
    },
    {
        id:34,
        songName:`Shape Of You - Ed Sheeran<br>
        <div class = "subtitle">Ed Sheeran</div>`,
        poster:'Dua/img/34.jpg'
    },
    {
        id:35,
        songName:`Bad Habits - Ed Sheeran<br>
        <div class = "subtitle">Emma Chamberlain</div>`,
        poster:'Dua/img/35.jpg'
    },
    {
        id:36,
        songName:`Calm Down - Selene Gomez<br>
        <div class = "subtitle">Selene Gomez, Rema</div>`,
        poster:'Dua/img/36.jpg'
    },
    {
        id:37,
        songName:`Flowers - Miley Cyrus <br>
        <div class = "subtitle">Miley Cyrus</div>`,
        poster:'Dua/img/37.jpg'
    },
    {
        id:38,
        songName:`Dusk Till Down - Zyan Malik<br>
        <div class = "subtitle">Zyan Malik</div>`,
        poster:'Dua/img/38.jpg'
    },
    {
        id:39,
        songName:`The Specter - Alan Walker<br>
        <div class = "subtitle">Alan Walker</div>`,
        poster:'Dua/img/39.jpg'
    },
    {
        id:40,
        songName:`Uh Nai Na- Dharia<br>
        <div class = "subtitle">Dharia</div>`,
        poster:'Dua/img/40.jpg'
    },
    {
        id:41,
        songName:`I am Unstopable - Sia<br>
        <div class = "subtitle">Sia</div>`,
        poster:'Dua/img/41.jpg'
    },
    {
        id:42,
        songName:`Lover - Tailor Swift<br>
        <div class = "subtitle">Tailor Swift</div>`,
        poster:'Dua/img/42.jpg'
    },
    {
        id:43,
        songName:`Blinding Lights - The Weekend<br>
        <div class = "subtitle">The Weekend</div>`,
        poster:'Dua/img/43.jpg'
    },
    {
        id:44,
        songName:`Memories - Maroon 5<br>
        <div class = "subtitle">Maroon</div>`,
        poster:'Dua/img/44.jpg'
    },
    {
        id:45,
        songName:`Starboy - The Weekend<br>
        <div class = "subtitle">The Weekend</div>`,
        poster:'Dua/img/45.jpg'
    },
    {
        id:46,
        songName:`Yummy - Justien Bieber<br>
        <div class = "subtitle">Justien Bieber</div>`,
        poster:'/Justien/img/1.jpg'
    },
    {
        id:47,
        songName:`Baby - Justien Bieber<br>
        <div class = "subtitle">Justien Bieber</div>`,
        poster:'/Justien/img/2.jpg'
    },
    {
        id:48,
        songName:`Mood Remix - Justien Bieber<br>
        <div class = "subtitle">Justien Bieber</div>`,
        poster:'/Justien/img/3.jpg'
    },
    {
        id:49,
        songName:`Never Say Never - Justien Bieber<br>
        <div class = "subtitle">Justien Bieber</div>`,
        poster:'/Justien/img/4.jpg'
    },
    {
        id:50,
        songName:`Sorry - Justien Bieber<br>
        <div class = "subtitle">Justien Bieber</div>`,
        poster:'/Justien/img/5.jpg'
    },
   
   
]



const music = new Audio('music/1.mp3')

Array.from(document.getElementsByClassName('song-item')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

// Search Data Start 
let Search_result = document.getElementsByClassName('search_results')[0]

songs.forEach(element => {
    const {id, songName , poster} = element;
    let card = document.createElement('a')
    card.classList.add('card')
    card.href = "#"+ id;
    card.innerHTML = `
    <img src="${poster}" alt="" srcset="">
    <div class="content">${songName}</div>
    </div>`

    Search_result.appendChild(card)
});

let input = document.getElementsByTagName('input')[0]
input.addEventListener('keyup', ()=>{
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

Array.from(document.getElementsByClassName('playList')).forEach((e)=>{
e.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')
        
    }
});
})

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')
        
    }
    else{
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.remove('bi-pause-fill')
        masterPlay.classList.add('bi-play-fill') 
    }
});





let index = 0; 
let poster = document.getElementById('poster_play')

makeBackground = ()=>{
    Array.from(document.getElementsByClassName('song-item')).forEach((e)=>{
        e.style.background = 'rgb(105, 105, 170, .0)'
    })
}

makePlay = ()=>{
    Array.from(document.getElementsByClassName('playList')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill') 
        el.classList.remove('bi-pause-circle-fill')
    })
}


Array.from(document.getElementsByClassName('playList')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        let index = el.target.id;
        music.src = `Dua/music/${index}.mp3`;
        poster.src = `Dua/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `Dua/music/${index}.mp3`

        let songTitle = songs.filter((els)=>{
            return els.id == index
        })
    
        songTitle.forEach(e=>{
            let { songName } = e;
            Title.innerHTML = songName
            download_music.setAttribute('download',songName)

        })

        makeBackground()
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = 'rgb(105, 105, 170, .3)'

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

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur/60)
    let sec1 = Math.floor(music_dur%60)
    
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentE.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr/60)
    let sec2 = Math.floor(music_curr%60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    currentT.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((music_curr/music_dur)*100)
    seek.value = progressBar;
    let seekBar = seek.value;

    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`


})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value*music.duration/100
})

let vol =  document.getElementById('vol')
let vol_icon =  document.getElementById('vol_icon')
let vol_bar =  document.getElementsByClassName('vol_bar')[0]
let vol_dot =  document.getElementById('bar3')

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down')
        vol_icon.classList.add('bi-volume-off-fill')
    }

    if (vol.value > 0 ) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down')
        vol_icon.classList.remove('bi-volume-off-fill')
        
    }
    if (vol.value > 50 ) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down')
        vol_icon.classList.remove('bi-volume-off-fill')
        
    }

    let vol_a  = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
})

let back = document.getElementById('back')
let next = document.getElementById('next')
let btn = document.getElementById('btn')


back.addEventListener('click', (el)=>{
    index = index - 1

    if (index < 1) {
       index =  Array.from(document.getElementsByClassName('song-item')).length
    }
    music.src = `Dua/music/${index}.mp3`;
        poster.src = `Dua/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')
        
        let songTitle = songs.filter((els)=>{
            return els.id == index
        })
     
        songTitle.forEach(e=>{
            let { songName } = e;
            Title.innerHTML = songName
            download_music.setAttribute('download', songName)

        })

        makeBackground()
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = 'rgb(165, 165, 110, .1)'

        makePlay();
        wave.classList.add('acitve1')
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')

})
next.addEventListener('click', (el)=>{
    index = index + 1
    if (index >   Array.from(document.getElementsByClassName('song-item')).length) {
         index =  1
     }

    music.src = `Dua/music/${index}.mp3`;
        poster.src = `Dua/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')
        
        let songTitle = songs.filter((els)=>{
            return els.id == index
        })

        songTitle.forEach(e=>{
            let { songName } = e;
            Title.innerHTML = songName
            download_music.setAttribute('download', songName)

        })

        makeBackground()
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = 'rgb(105, 105, 170, .3)'

        makePlay();
        wave.classList.add('acitve1')
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')

})
btn.addEventListener('click', (el)=>{
    index = index + 1
    if (index >   Array.from(document.getElementsByClassName('song-item')).length) {
         index =  1
     }

    music.src = `Dua/music/${index}.mp3`;
        poster.src = `Dua/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')
        
        let songTitle = songs.filter((els)=>{
            return els.id == index
        })
        songTitle.forEach(e=>{
            let { songName } = e;
            Title.innerHTML = songName
            download_music.setAttribute('download', songName)

        })

        makeBackground()
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = 'rgb(105, 105, 170, .3)'

        makePlay();
        wave.classList.add('acitve1')

})

let shuffle = document.getElementsByClassName('shuffle')[0]



shuffle.addEventListener('click', ()=>{

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


const next_music = (el)=>{
    if (index == songs.length) {
        index = 1
    }
    else{
        index++;
    }
    music.src = `Dua/music/${index}.mp3`
    poster.src = `Dua/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Dua/music/${index}.mp3`
    let songTitle = songs.filter((els)=>{
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e=>{
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)
    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = 'rgb(105, 105, 170, .3)'

    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')
}
const random_music = (el)=>{
    if (index == songs.length) {
        index = 1
    }
    else{
        index = Math.floor(Math.random()*songs.length + 1)
    }
    music.src = `Dua/music/${index}.mp3`
    poster.src = `Dua/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Dua/music/${index}.mp3`
    let songTitle = songs.filter((els)=>{
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e=>{
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)
        
    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index -1].style.background = 'rgb(105, 105, 170, .3)'
    makePlay();

    wave.classList.add('acitve1')
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
}
const repeat_music = (el)=>{
    index;
    music.src = `Dua/music/${index}.mp3`
    poster.src = `Dua/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Dua/music/${index}.mp3`
    let songTitle = songs.filter((els)=>{
        return els.id == index
    })
    console.log(songTitle)

    songTitle.forEach(e=>{
        let { songName } = e;
        Title.innerHTML = songName
        download_music.setAttribute('download', songName)

    })

    makeBackground()
    Array.from(document.getElementsByClassName('song-item'))[index -1].style.background = 'rgb(105, 105, 170, .3)'
    makePlay();
    wave.classList.add('acitve1')
    el.target.classList.remove('bi-play-circle-fill')
    el.target.classList.add('bi-pause-circle-fill')

}



music.addEventListener('ended', ()=>{
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

menu_active.addEventListener('click', ()=>{
    menu.classList.toggle('activemenu')
})
song1.addEventListener('click', ()=>{
    
    menu.classList.toggle('activemenu')
})



