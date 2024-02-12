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
        songName:`Mere Meheboob Qayamat Hogi<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/1.jpg'
    },
    {
        id:2,
        songName:`Mere Sapno Ki Raani Kab Aayegi Tu<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/2.jpg'
    },
    {
        id:3,
        songName:`Aree Diwano - Don<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/3.jpg'
    },
    {
        id:4,
        songName:`Ye Shaam Mastani - Kishore Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/4.jpg'
    },
    {
        id:5,
        songName:`Gaata Rahe Mera Dil<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/5.jpg'
    },
    {
        id:6,
        songName:`Khehene Ki Nahi Baat<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/6.jpg'
    },
    {
        id:7,
        songName:`Pardeshiya - Lata Mangeshkar<br>
        <div class = "subtitle">Lata Mangeshkar, Kishore Kumar</div>`,
        poster:'Kishor/img/7.jpg'
    },
    {
        id:8,
        songName:`Kora Kagaz Tha Ye Mera<br>
        <div class = "subtitle">Kishor Kumar, Lata Mangeskar</div>`,
        poster:'Kishor/img/8.jpg'
    },
    {
        id:9,
        songName:`Dekha Na - Kishor Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/9.jpg'
    },
    {
        id:10,
        songName:`Phoolo Ke Maang Se - Kishor Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/10.jpg'
    },
    {
        id:11,
        songName:`Ye Dil Na Hota Bechara<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/11.jpg'
    },
    {
        id:12,
        songName:`Ek Ladki Beeghi Baaghi Si<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/12.jpg'
    },
    {
        id:13,
        songName:`Haame Tumshe Pyaar Kitna<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/50.jpg'
    },
    {
        id:14,
        songName:`Tuj Sang Preet Lagai Hai<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/14.jpg'
    },
    {
        id:15,
        songName:`Koi Humdam Na Raha<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/15.jpg'
    },
    {
        id:16,
        songName:`Ek Ajnabee Haseena Se<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/16.jpg'
    },
    {
        id:17,
        songName:`Jaaneeman Jaaneeman - Kishor Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/36.jpg'
    },
    {
        id:18,
        songName:`Allah Kare Tu Bhi Aajaye<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/18.jpg'
    },
    {
        id:19,
        songName:`Cheddo Na Meri Zulfen<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/19.jpg'
    },
    {
        id:20,
        songName:`Chingari Koi Banke - Kishore Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/20.jpg'
    },
    {
        id:21,
        songName:`Tu Bata De - Kishore Kumar<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/21.jpeg'
    },
    {
        id:22,
        songName:`Neele Neele Ambar Par<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/22.jpeg'
    },
    {
        id:23,
        songName:`Tu Tu Hai Wahi<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/23.jpeg'
    },
    {
        id:24,
        songName:`Kya Yahi Pyar Hai - Rocky<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/24.jpeg'
    },
    {
        id:25,
        songName:`Keh Du Tumhe<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/25.jpeg'
    },
    {
        id:26,
        songName:`Pyar Deewana Hota Hai<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/26.jpeg'
    },
    {
        id:27,
        songName:`Aap Ki Aankho Mai Kuch<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/27.jpeg'
    },
    {
        id:28,
        songName:`Kuch Too Log Khahenge<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/28.jpeg'
    },
    {
        id:29,
        songName:`Pal Pal Dil Ke Pass<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/29.jpeg'
    },
    {
        id:30,
        songName:`Oo Mere Dil Ke Chain<br>
        <div class = "subtitle">Kishor Kumar</div>`,
        poster:'Kishor/img/30.jpeg'
    },
    {
        id:31,
        songName:`Pardeshiya - Lata Mangeskar<br>
        <div class = "subtitle">Lata Mangeskar, Kishore Kumar</div>`,
        poster:'Kishor/img/31.jpg'
    },
    {
        id:32,
        songName:`Pyar Hame Kis Mod Par Le Aaya<br>
        <div class = "subtitle">R.D Burman, Kishore Kumar</div>`,
        poster:'Kishor/img/32.jpg'
    },
    {
        id:33,
        songName:`Tere Jaisa Yarr Khaha - Yaarana<br>
        <div class = "subtitle">Kishore Kumar</div>`,
        poster:'Kishor/img/33.jpg'
    },
    {
        id:34,
        songName:`Mehebooba Mehebooba - Sholay<br>
        <div class = "subtitle">Kishore Kumar, Lata Mangeskar</div>`,
        poster:'Kishor/img/34.jpg'
    },
    {
        id:35,
        songName:`Hum Aur Tum Ek Kamre Mai Band Hokar<br>
        <div class = "subtitle">Shailender Singh, Lata Mangeshkar</div>`,
        poster:'Kishor/img/35.jpg'
    },
    {
        id:36,
        songName:`Kya Khoob Lagti Ho Badi Sundar Dikti Ho<br>
        <div class = "subtitle">Mukesh, Kanchan</div>`,
        poster:'Kishor/img/36.jpg'
    },
    {
        id:37,
        songName:`Baar Baar Din Ye Aaye - Happy Birthday Song<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'Kishor/img/37.jpg'
    },
    {
        id:38,
        songName:`Likke Jo Khatt Tuje - Knnya Dan <br>
        <div class = "subtitle">Mohd. Rafi</div>`,
        poster:'Kishor/img/38.jpg'
    },
    {
        id:39,
        songName:`Chanda Hai Tu Mera Suraj Hai Tu<br>
        <div class = "subtitle">Lata Mangeskar</div>`,
        poster:'Kishor/img/39.jpg'
    },
    {
        id:40,
        songName:`Kohare Ki Chadar Lapete Hu<br>
        <div class = "subtitle">Lata Mangeskar</div>`,
        poster:'Kishor/img/40.jpg'
    },
    {
        id:41,
        songName:`Ek Tera Saat Humko<br>
        <div class = "subtitle">Moham. Rafi, Lata Mangeskar</div>`,
        poster:'Kishor/img/41.jpg'
    },
    {
        id:42,
        songName:`Dil Le Gayi Teri Ye Bindiya<br>
        <div class = "subtitle">Moham. Rafi, Lata Mangeskar</div>`,
        poster:'Kishor/img/42.jpg'
    },
    {
        id:43,
        songName:`Dheere Dheere Bol Koi Sun Na le<br>
        <div class = "subtitle">Mukesh, Lata Mangeskar</div>`,
        poster:'Kishor/img/43.jpg'
    },
    {
        id:44,
        songName:`Tumne Kisi Se Kabhi<br>
        <div class = "subtitle">Mukesh, Khanchan</div>`,
        poster:'Kishor/img/44.jpg'
    },
    {
        id:45,
        songName:`Mujhe Kuch Khena Hai<br>
        <div class = "subtitle">Lata Mangeskar, Mohb. Rafi</div>`,
        poster:'Kishor/img/45.jpg'
    },
    {
        id:46,
        songName:`Waada Karle Saajan<br>
        <div class = "subtitle">Lata Mangeskar, Mohb. Rafi</div>`,
        poster:'Kishor/img/46.jpg'
    },
    {
        id:47,
        songName:`Tum Aagaye Ho - Kishore Kumar<br>
        <div class = "subtitle">Kishor Kumar, Lata Mangeskar</div>`,
        poster:'Kishor/img/47.jpg'
    },
    {
        id:48,
        songName:`Kitna Pyara Waada Hai<br>
        <div class = "subtitle">Lata Mangeskar, Mohb. Rafi</div>`,
        poster:'Kishor/img/48.jpg'
    },
    {
        id:49,
        songName:`Bheegi Bheegi Raaton Mai<br>
        <div class = "subtitle">Kishore Kumar,Lata Mangeskar</div>`,
        poster:'Kishor/img/49.jpg'
    },
    {
        id:50,
        songName:`Gir Gaya Jhumka<br>
        <div class = "subtitle">Kishor Kumar, Lata Mangeskar</div>`,
        poster:'Kishor/img/50.jpg'
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
        music.src = `Kishor/music/${index}.mp3`;
        poster.src = `Kishor/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `Kishor/music/${index}.mp3`

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
    music.src = `Kishor/amusic/${index}.mp3`;
        poster.src = `Kishor/img/${index}.jpg`;
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

    music.src = `Kishor/music/${index}.mp3`;
        poster.src = `Kishor/img/${index}.jpg`;
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

    music.src = `Kishor/music/${index}.mp3`;
        poster.src = `Kishor/img/${index}.jpg`;
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


const next_music = ()=>{
    if (index == songs.length) {
        index = 1
    }
    else{
        index++;
    }
    music.src = `Kishor/music/${index}.mp3`
    poster.src = `Kishor/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Kishor/music/${index}.mp3`
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
    music.src = `Kishor/music/${index}.mp3`
    poster.src = `Kishor/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Kishor/music/${index}.mp3`
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
const repeat_music = ()=>{
    index;
    music.src = `Kishor/music/${index}.mp3`
    poster.src = `Kishor/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Kishor/music/${index}.mp3`
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



