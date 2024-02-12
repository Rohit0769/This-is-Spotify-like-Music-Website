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
        songName:`Meri Maa Ke Barabar Koi Nahi<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/1.jpg'
    },
    {
        id:2,
        songName:`Raata Lambiyan - Shershaah<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/2.jpg'
    },
    {
        id:3,
        songName:`Rim Jhim - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/3.jpg'
    },
    {
        id:4,
        songName:`Meri Zindagi Hai Tu<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/4.jpg'
    },
    {
        id:5,
        songName:`Lut Gaye - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/5.jpg'
    },
    {
        id:6,
        songName:`Humnava Mere - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/6.jpg'
    },
    {
        id:7,
        songName:`Waafa Na Raas Aayi<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/7.jpg'
    },
    {
        id:8,
        songName:`Tera Masoom Chehera - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/8.jpg'
    },
    {
        id:9,
        songName:`Tumshe Pyar Karke - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/9.jpg'
    },
    {
        id:10,
        songName:`Nayan - Jubin Nautiuyal<br>
        <div class = "subtitle">Jubin Nautiyal, Dhvani Bhanushali</div>`,
        poster:'Jubin/img/10.jpg'
    },
    {
        id:11,
        songName:`Ye Dua Hai Meri Rab Se<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/11.jpg'
    },
    {
        id:12,
        songName:`Mai Jis Din Bhula Dunga - Jubin<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/12.jpg'
    },
    {
        id:13,
        songName:`Dil Galati Kar Bettha Hai<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/13.jpg'
    },
    {
        id:14,
        songName:`Dil Chahate ho - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/14.jpg'
    },
    {
        id:15,
        songName:`Tumse Pyar Karke - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal, Tulsi Kumar</div>`,
        poster:'Jubin/img/15.jpg'
    },
    {
        id:16,
        songName:`Lo Safar Shuru Hogaya - Baaghi 2<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/16.jpg'
    },
    {
        id:17,
        songName:`Khushi Jab Teri - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/17.jpg'
    },
    {
        id:18,
        songName:`Kiston - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/18.jpg'
    },
    {
        id:19,
        songName:`Dil Lauta Do - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/19.jpg'
    },
    {
        id:20,
        songName:`Samanndar - Kis Kis ko Pyar karu<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/20.jpg'
    },
    {
        id:21,
        songName:`Mai Teri Chunariya - ABCD 2<br>
        <div class = "subtitle">Asses Kaur</div>`,
        poster:'asses/img/4.jpg'
    },
    {
        id:22,
        songName:`Ve Maahi - Kesari<br>
        <div class = "subtitle">Asses Kaur</div>`,
        poster:'asses/img/5.jpg'
    },
    {
        id:23,
        songName:`Asqh Na Ho - Holiday<br>
        <div class = "subtitle">Asses Kaur</div>`,
        poster:'asses/img/6.jpg'
    },
    {
        id:24,
        songName:`Tu Ban Ja Gali Banaras Ki<br>
        <div class = "subtitle">Asses Kaur</div>`,
        poster:'asses/img/7.jpg'
    },
    {
        id:25,
        songName:`Bas Itna Hai Tumse Khehena<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/1.jpg'
    },
    {
        id:26,
        songName:`Bol Do Na Jara<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/2.jpg'
    },
    {
        id:27,
        songName:`Jab Tak - Ms. Dhoni:The Untold Story<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/3.jpg'
    },
    {
        id:28,
        songName:`Ghar Se Nikalte Hi Kuch Dur<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/4.jpg'
    },
    {
        id:29,
        songName:`Wajah Tum Ho - Arman Malik<br>
        <div class = "subtitle">Arman Malik, Dharshan Raval</div>`,
        poster:'arman/img/5.jpg'
    },
    {
        id:30,
        songName:`Hua Hai Aaj Peheli Baar - Sanam Re<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/6.jpg'
    },
    {
        id:31,
        songName:`Dil Mai Chupaa Lunga - Arman Malik<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/7.jpg'
    },
    {
        id:32,
        songName:`Shau Aasmanoo Mai - Arman Malik<br>
        <div class = "subtitle">Arman Malik</div>`,
        poster:'arman/img/8.jpg'
    },
    {
        id:33,
        songName:`Chunariya Jeeni Jeeni<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/28.jpg'
    },
    {
        id:34,
        songName:`Khariyat - Arijit Singh<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/29.jpg'
    },
    {
        id:35,
        songName:`Apna Bana Le Piya<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/30.jpg'
    },
    {
        id:36,
        songName:`Sun Sathiya - mp3<br>
        <div class = "subtitle">Priya Saraiya, Divya Kumar</div>`,
        poster:'img/31.jpg'
    },
    {
        id:37,
        songName:`Mann Mast Malang<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/32.jpg'
    },
    {
        id:38,
        songName:`Sparkle - Your Name<br>
        <div class = "subtitle">Anny K</div>`,
        poster:'img/33.jpg'
    },
    {
        id:39,
        songName:`Mere meheboob Qayamat hogi<br>
        <div class = "subtitle">Abhay Jain</div>`,
        poster:'img/34.jpg'
    },
    {
        id:40,
        songName:`Vaaste - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavi Bhanushali</div>`,
        poster:'img/35.jpg'
    },
    {
        id:41,
        songName:`Nede Nede - Yaarana Da Kecthup<br>
        <div class = "subtitle">Alisha Chinnai</div>`,
        poster:'img/36.jpg'
    },
    {
        id:42,
        songName:`Manike maake Hiite<br>
        <div class = "subtitle">Yohani</div>`,
        poster:'img/37.jpg'
    },
    {
        id:43,
        songName:`Kya itna Bura hu mai maa<br>
        <div class = "subtitle">Sankar madhavan</div>`,
        poster:'img/38.jpg'
    },
    {
        id:44,
        songName:`Dehelizz pe mere dil ki jo rakke hai<br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'img/39.jpg'
    },
    {
        id:45,
        songName:`Tera Yaar hu mai<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/40.jpg'
    },
    {
        id:46,
        songName:`Teri mitti mai mil Jawa<br>
        <div class = "subtitle">B-Praak</div>`,
        poster:'img/41.jpg'
    },
    {
        id:47,
        songName:`Tere Jaisa Yaar Kahan
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/42.jpg'
    },
    {
        id:48,
        songName:`SaudeBazzi - Javed Ali<br>
        <div class = "subtitle">Javed Ali</div>`,
        poster:'img/43.jpg'
    },
    {
        id:49,
        songName:`Tarasti hai Nigahe - Azim<br>
        <div class = "subtitle">Azim Azhar</div>`,
        poster:'img/44.jpg'
    },
    {
        id:50,
        songName:`Saiboo - Shor in the City<br>
        <div class = "subtitle">Shreya Ghosal</div>`,
        poster:'img/45.jpg'
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
        music.src = `Jubin/music/${index}.mp3`;
        poster.src = `Jubin/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `Jubin/music/${index}.mp3`

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
    music.src = `Jubin/amusic/${index}.mp3`;
        poster.src = `Jubin/img/${index}.jpg`;
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

    music.src = `Jubin/music/${index}.mp3`;
        poster.src = `Jubin/img/${index}.jpg`;
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

    music.src = `Jubin/music/${index}.mp3`;
        poster.src = `Jubin/img/${index}.jpg`;
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
    music.src = `Jubin/music/${index}.mp3`
    poster.src = `Jubin/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Jubin/music/${index}.mp3`
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
    music.src = `Jubin/music/${index}.mp3`
    poster.src = `Jubin/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Jubin/music/${index}.mp3`
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
    music.src = `Jubin/music/${index}.mp3`
    poster.src = `Jubin/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Jubin/music/${index}.mp3`
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



