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
        songName:`Ram Siya Ram - Aadipurush<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/1.jpg'
    },
    {
        id:2,
        songName:`Kajra Mohobbat Waala - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/2.jpg'
    },
    {
        id:3,
        songName:`Maiyya Menu - Jersy<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/3.jpg'
    },
    {
        id:4,
        songName:`Bekhayi Mai Bhi Tera - Kabir Singh<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/4.jpg'
    },
    {
        id:5,
        songName:`Chura Liya Hai - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/5.jpg'
    },
    {
        id:6,
        songName:`Shiv Tandav Stotram - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/6.jpg'
    },
    {
        id:7,
        songName:`Mashakali 2.0 - Marjaawan<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/7.jpg'
    },
    {
        id:8,
        songName:`Ghamannd kar - Tanahji<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/8.jpg'
    },
    {
        id:9,
        songName:`Shoneya - Acoustic<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/9.jpg'
    },
    {
        id:10,
        songName:`Chandini - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/10.jpg'
    },
    {
        id:11,
        songName:`Humraah - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/11.jpg'
    },
    {
        id:12,
        songName:`Har Har Mahadev - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/12.jpg'
    },
    {
        id:13,
        songName:`Deewaani - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/13.jpg'
    },
    {
        id:14,
        songName:`Meri Ho jaa - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/14.jpg'
    },
    {
        id:15,
        songName:`Bewaafai - Sachet Tandon<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/15.jpg'
    },
  
    {
        id:16,
        songName:`Chunariya Jeeni Jeeni<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/28.jpg'
    },
    {
        id:17,
        songName:`Khariyat - Arijit Singh<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/29.jpg'
    },
    {
        id:18,
        songName:`Apna Bana Le Piya<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/30.jpg'
    },
    {
        id:19,
        songName:`Sun Sathiya - mp3<br>
        <div class = "subtitle">Priya Saraiya, Divya Kumar</div>`,
        poster:'img/31.jpg'
    },
    {
        id:20,
        songName:`Mann Mast Malang<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/32.jpg'
    },
    {
        id:21,
        songName:`Sparkle - Your Name<br>
        <div class = "subtitle">Anny K</div>`,
        poster:'img/33.jpg'
    },
    {
        id:22,
        songName:`Mere meheboob Qayamat hogi<br>
        <div class = "subtitle">Abhay Jain</div>`,
        poster:'img/34.jpg'
    },
    {
        id:23,
        songName:`Vaaste - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavi Bhanushali</div>`,
        poster:'img/35.jpg'
    },
    {
        id:24,
        songName:`Nede Nede - Yaarana Da Kecthup<br>
        <div class = "subtitle">Alisha Chinnai</div>`,
        poster:'img/36.jpg'
    },
    {
        id:25,
        songName:`Manike maake Hiite<br>
        <div class = "subtitle">Yohani</div>`,
        poster:'img/37.jpg'
    },
    {
        id:26,
        songName:`Kya itna Bura hu mai maa<br>
        <div class = "subtitle">Sankar madhavan</div>`,
        poster:'img/38.jpg'
    },
    {
        id:27,
        songName:`Dehelizz pe mere dil ki jo rakke hai<br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'img/39.jpg'
    },
    {
        id:28,
        songName:`Tera Yaar hu mai<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/40.jpg'
    },
    {
        id:29,
        songName:`Teri mitti mai mil Jawa<br>
        <div class = "subtitle">B-Praak</div>`,
        poster:'img/41.jpg'
    },
    {
        id:30,
        songName:`Tere Jaisa Yaar Kahan
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/42.jpg'
    },
    {
        id:31,
        songName:`SaudeBazzi - Javed Ali<br>
        <div class = "subtitle">Javed Ali</div>`,
        poster:'img/43.jpg'
    },
    {
        id:32,
        songName:`Tarasti hai Nigahe - Azim<br>
        <div class = "subtitle">Azim Azhar</div>`,
        poster:'img/44.jpg'
    },
    {
        id:33,
        songName:`Saiboo - Shor in the City<br>
        <div class = "subtitle">Shreya Ghosal</div>`,
        poster:'img/45.jpg'
    },
    {
        id:34,
        songName:`Afreeen Afreeen <br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/46.jpg'
    },
    {
        id:35,
        songName:`Oo Khuda -  Palak<br>
        <div class = "subtitle">Palak Mucchal, Amaal Malik</div>`,
        poster:'img/47.jpg'
    },
    {
        id:36,
        songName:`Deva Deva - Arijit Singh<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/18.jpg'
    },
    {
        id:37,
        songName:`Tu Jaane Na<br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'img/49.jpg'
    },
    {
        id:38,
        songName:`Soch Na Saake - Arijit Singh<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/50.jpg'
    },
    {
        id:39,
        songName:`Main Royaan - Yassier<br>
        <div class = "subtitle">Yassier Deshai</div>`,
        poster:'img/51.jpg'
    },
    {
        id:40,
        songName:`Aarariraro Raaro<br>
        <div class = "subtitle">Deepti Suresh</div>`,
        poster:'img/52.jpg'
    },
    {
        id:41,
        songName:`Aankhon mein teri Ajab Si <br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'img/53.jpg'
    },
    {
        id:42,
        songName:`Tu Pyar Hai Kisi Aur Ka<br>
        <div class = "subtitle">Samreet Dutta</div>`,
        poster:'img/54.jpg'
    },
    {
        id:43,
        songName:`Dilbar - Nora Fatehi<br>
        <div class = "subtitle">Neha Kakkar</div>`,
        poster:'img/55.jpg'
    },
    {
        id:44,
        songName:`Khaun Tuje - Palak<br>
        <div class = "subtitle">Palak Mucchal</div>`,
        poster:'img/56.jpg'
    },
    {
        id:45,
        songName:`Jeene Laga hu Pehele Se Jayada<br>
        <div class = "subtitle">Aatif Aslam, Shreya Ghosal</div>`,
        poster:'img/57.jpg'
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
        music.src = `sachet/music/${index}.mp3`;
        poster.src = `sachet/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `sachet/music/${index}.mp3`

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
    music.src = `sachet/amusic/${index}.mp3`;
        poster.src = `sachet/img/${index}.jpg`;
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

    music.src = `sachet/music/${index}.mp3`;
        poster.src = `sachet/img/${index}.jpg`;
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

    music.src = `sachet/music/${index}.mp3`;
        poster.src = `sachet/img/${index}.jpg`;
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
    music.src = `sachet/music/${index}.mp3`
    poster.src = `sachet/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sachet/music/${index}.mp3`
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
    music.src = `sachet/music/${index}.mp3`
    poster.src = `sachet/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sachet/music/${index}.mp3`
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
    music.src = `sachet/music/${index}.mp3`
    poster.src = `sachet/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sachet/music/${index}.mp3`
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



