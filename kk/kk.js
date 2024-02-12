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
        songName:`Jannatien Khaana - Jannatt 2<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/1.jpg'
    },
    {
        id:2,
        songName:`Zara Si Dil Mai Jagah tu<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/2.jpg'
    },
    {
        id:3,
        songName:`Kya Muje Pyarr Hai<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/3.jpg'
    },
    {
        id:4,
        songName:`Tu Jo Mila - Bajrangi Bhaijaan<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/4.jpg'
    },
    {
        id:5,
        songName:`Tu Hi Mera Sab Hai Jahaan Hai<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/5.jpg'
    },
    {
        id:6,
        songName:`Khuda Jaane<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/6.jpg'
    },
    {
        id:7,
        songName:`Dil Ibadat<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/7.jpg'
    },
    {
        id:8,
        songName:`Aankho Mai Teri Ajab Ajab Si<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/8.jpg'
    },
    {
        id:9,
        songName:`Tuje Jo Paaya<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/9.jpg'
    },
    {
        id:10,
        songName:`Kaisa Ye Raaz Hai<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/10.jpg'
    },
    {
        id:11,
        songName:`Tuje Sochta Hu <br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/11.jpg'
    },
    {
        id:12,
        songName:`Tu Meri Sab hai Subha Hai<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/12.jpg'
    },
    {
        id:13,
        songName:`Alvida - KK<br>
        <div class = "subtitle">KK, Sonu Nigam</div>`,
        poster:'/kk/img/13.jpg'
    },
    {
        id:14,
        songName:`Piya Aaye Na<br>
        <div class = "subtitle">KK, Tulsi Kumar</div>`,
        poster:'/kk/img/14.jpg'
    },
    {
        id:15,
        songName:`Zindgai Do Pal Ki<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/15.jpg'
    },
    {
        id:16,
        songName:`Labon Ko - KK<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/16.jpg'
    },
    {
        id:17,
        songName:`Beete Lamhe Humein<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/17.jpg'
    },
    {
        id:18,
        songName:`Oo Meri Jaan - KK<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/18.jpg'
    },
    {
        id:19,
        songName:`Saanson ke - Raees<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/19.jpg'
    },
    {
        id:20,
        songName:`Rafta Rafta - KK<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/20.jpg'
    },
    {
        id:21,
        songName:`Bezubaan - KK<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/21.jpg'
    },
    {
        id:22,
        songName:`Bas Ek Pal<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/22.jpg'
    },
    {
        id:23,
        songName:`Abhi Abhi - Jism 2<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/23.jpg'
    },
    {
        id:24,
        songName:`Jaane Kiske Khwaab - Gujaarish<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/24.jpg'
    },
    {
        id:25,
        songName:`Dil Kyu Ye Mera Shor Kare - Kites<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/25.jpg'
    },
    {
        id:26,
        songName:`Bekhayi Mai Bhi Tera - Kabir Singh<br>
        <div class = "subtitle">Sachet Tandon</div>`,
        poster:'sachet/img/4.jpg'
    },
    {
        id:27,
        songName:`Tenu Suit Suit Karda - Hindi Medium<br>
        <div class = "subtitle">Guru Randhava</div>`,
        poster:'/kk/img/27.jpg'
    },
    {
        id:28,
        songName:`Mere Rashke Qamar - New Version<br>
        <div class = "subtitle">Mr. Jatt</div>`,
        poster:'/kk/img/28.jpg'
    },
    {
        id:29,
        songName:`Jitni Tu Milti Jaaye<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/29.jpg'
    },
    {
        id:30,
        songName:`Saddi Gali Aaja - Nautanki Saala<br>
        <div class = "subtitle">KK</div>`,
        poster:'/kk/img/30.jpg'
    },
   
    {
        id:31,
        songName:`Hai Hassi Ban Gaye - Hamari Adhuri Khahani<br>
        <div class = "subtitle">Yassier Desai</div>`,
        poster:'/kk/img/31.jpg'
    },
    {
        id:32,
        songName:`Maula Mere Maula Mere - Roop Kumar<br>
        <div class = "subtitle">Roop Kumar</div>`,
        poster:'/kk/img/32.jpg'
    },
    {
        id:33,
        songName:`Ek Ladki Ko Dekha Too Yesha Laga<br>
        <div class = "subtitle">Armaan Malik</div>`,
        poster:'/kk/img/33.jpg'
    },
    {
        id:34,
        songName:`Aashiq Banaya - Title Track<br>
        <div class = "subtitle">Himesh Reshamiya</div>`,
        poster:'kk/img/34.jpg'
    },
    {
        id:35,
        songName:`Ya Ali - Gangster<br>
        <div class = "subtitle">Zubeen Garg</div>`,
        poster:'/kk/img/35.jpg'
    },
    {
        id:36,
        songName:`Mehendi - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavni Bhanushali</div>`,
        poster:'Dhavni/img/2.jpg'
    },
    {
        id:37,
        songName:`Dheere Dheere Se Meri Zindgi Mai Aana<br>
        <div class = "subtitle">Honey Singh</div>`,
        poster:'Honey/img/2.jpg'
    },
    {
        id:38,
        songName:`Lo Safar Shuru Hogaya - Baaghi 2<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/16.jpg'
    },
    {
        id:39,
        songName:`Kun Faaya Kun - Rockstar<br>
        <div class = "subtitle">A.R Reheman, Javed Ali</div>`,
        poster:'asses/img/20.jpg'
    },
    {
        id: 40,
        songName: `Tu Jaane Na - Ajab Prem ki Gajab Khahani<br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster: '/atif/img/2.jpg'
    },
    {
        id: 41,
        songName: `Tera Hua - Atif Aslam<br>
        <div class="subtitle">Atif Aslam<</div>`,
        poster: '/atif/img/8.jpg'
    },
    {
        id:42,
        songName:`Tu Rang Sarbato ka<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/9.jpg'
    },
    {
        id:43,
        songName:`Aaraha hu mai Zindagi<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/10.jpg'
    },
    {
        id:44,
        songName:`Oo Meri Laila - Laila Majnu<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:'/atif/img/11.jpg'
    },
    {
        id:45,
        songName:`Mere Meheboob Qayamat Hogi<br>
        <div class = "subtitle">Honey Singh</div>`,
        poster:'Honey/img/1.jpg'
    },
    {
        id:46,
        songName:`Dheere Dheere Se Meri Zindgi Mai Aana<br>
        <div class = "subtitle">Honey Singh</div>`,
        poster:'Honey/img/2.jpg'
    },
    {
        id:47,
        songName:`Raata Lambiyan - Shershaah<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/2.jpg'
    },
    {
        id:48,
        songName:`Rim Jhim - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/3.jpg'
    },
    {
        id:49,
        songName:`Meri Zindagi Hai Tu<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/4.jpg'
    },
    {
        id:50,
        songName:`Kaabil Hu - Kaabil<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/15.jpg'
    },
    {
        id:51,
        songName:`Hue Bechain pehli baar<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/17.jpg'
    },
    {
        id:52,
        songName:`Naiyoo Lagda - Kishi ka Bhai kishi ki jaan<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/9.jpg'
    },
    {
        id:53,
        songName:`Lut Gaye - Jubin Nautiyal<br>
        <div class = "subtitle">Jubin Nautiyal</div>`,
        poster:'Jubin/img/5.jpg'
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
        music.src = `kk/music/${index}.mp3`;    
        poster.src = `kk/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `kk/music/${index}.mp3`

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
    music.src = `/kk/music/${index}.mp3`;  
        poster.src = `/kk/img/${index}.jpg`;
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

    music.src = `kk/music/${index}.mp3`;    
        poster.src = `kk/img/${index}.jpg`;
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

    music.src = `kk/music/${index}.mp3`;    
        poster.src = `kk/img/${index}.jpg`;
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

const repeat_music = ()=>{
    index;
    music.src = `kk/music/${index}.mp3` 
    poster.src = `kk/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `kk/music/${index}.mp3`

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

}

const next_music = ()=>{
    if (index == songs.length) {
        index = 1
    }
    else{
        index++;
    }
    music.src = `kk/music/${index}.mp3` 
    poster.src = `kk/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `kk/music/${index}.mp3`
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
    music.src = `kk/music/${index}.mp3` 
    poster.src = `kk/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `kk/music/${index}.mp3`
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




music.addEventListener('ended', ()=>{
let b = shuffle.innerHTML;

switch (b) {
    case 'next':
        next_music();
        break;

    case 'repeat':
        repeat_music();
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



