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
        songName:`Papa Meri Jaan - Animal<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/1.jpg'
    },
    {
        id:2,
        songName:`Jaane Nahi Denge Tujhe - 3 Idiots<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/2.jpg'
    },
    {
        id:3,
        songName:`Bhagwaan Hai Khaha Re Tu<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/3.jpg'
    },
    {
        id:4,
        songName:`Abhi Mujme Khahi - Agnipath<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/4.jpg'
    },
    {
        id:5,
        songName:`Mai Agar Khahu - Om Shanti Om<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/5.jpg'
    },
    {
        id:6,
        songName:`Mannat - Daawat - e - Isqh<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/6.jpg'
    },
    {
        id:7,
        songName:`Kal Ho Na Ho<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/7.jpg'
      
    },
    {
        id:8,
        songName:`Shukran Allah - Sonu Nigam<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/8.jpg'
     
    },
    {
        id:9,
        songName:`Tumse Milkar Dil Ka hai jo Haal<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/9.jpg'
       
    },
    {
        id:10,
        songName:`Yarr Ne hi Loot Liya Ghar Yarr Kaa<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/10.jpg'
    
    },
    {
        id:11,
        songName:`Sandeshe Aate Hai - Border<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/11.jpg'
    },
    {
        id:12,
        songName:`Sab Kuch Bhula Diya<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/12.jpg'
    },
    {
        id:13,
        songName:`Tuj ko hu Dulhan Banaunga<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/13.jpg'
    },
    {
        id:14,
        songName:`Suraj Hua Madham<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/14.jpg'
    },
    {
        id:15,
        songName:`Tere Hath mai Mera Hath ho - Fanna<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/15.jpg'
    },
    {
        id:16,
        songName:`Mai Hoon Na - Title Song<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/16.jpg'
    },
    {
        id:17,
        songName:`Choori Choori - Lucky<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/17.jpg'
    },
    {
        id:18,
        songName:`You are My Soniya<br>
        <div class = "subtitle">sonu</div>`,
        poster:'/sonu/img/18.jpg'
    },
    {
        id:19,
        songName:`Dildara - Tamnchay<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/19.jpg'
    },
    {
        id:20,
        songName:`Mere Yarr Ki Shaadhi Hai<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/20.jpg'
    },
    {
        id:21,
        songName:`No Entry - No Entry<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/21.jpg'
    },
    {
        id:22,
        songName:`Dildara - Welcome to Shanjhanpur<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/22.jpg'
    },
    {
        id:23,
        songName:`Jaane Dil Mai Kabse Hai Tu<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/23.jpg'
    },
    {
        id:24,
        songName:`Oo Shaiba - Oo Shaiba<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/24.jpg'
    },
    {
        id:25,
        songName:`Maa Sherawaali Hai - Sonu Nigam<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/25.jpg'
    },
    {
        id:26,
        songName:`Agar Tum Saat Ho - alka Yagnik<br>
        <div class = "subtitle">Alka Yagnik, Arijit Singh</div>`,
        poster:'/alka/img/1.jpg'
    },
    {
        id:27,
        songName:`Ye Tune Kya Kiya - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/1.jpg'
    },
    {
        id:28,
        songName:`Zaroori Tha - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/2.jpg'
    },
    {
        id:29,
        songName:`Teri Meri Prem Khahani - Bodyguard<br>
        <div class = "subtitle">Rafet Ali Khan, Shreya Ghoshal</div>`,
        poster:'rafet/img/3.jpg'
    },
    {
        id:30,
        songName:`Mere Rashke Qamar - Badhshaoo<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/4.jpg'
    },
    {
        id:31,
        songName:`Main Jahaan Rahoon - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/5.jpg'
    },
    {
        id:32,
        songName:`Dhekte Dhekte - Batti Gul Meter Chalu<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/6.jpg'
    },
    {
        id:33,
        songName:`Kun Faaya Kun - Rockstar<br>
        <div class = "subtitle">A.R Reheman, Javed Ali</div>`,
        poster:'/Palak/img/31.jpg'
    },
    {
        id:34,
        songName:`Kissi Din Banungi Mai Raja Ki Rani<br>
        <div class = "subtitle">Shunidhi Chaunhan</div>`,
        poster:'/Palak/img/32.jpg'
    },
    {
        id:35,
        songName:`Ae Watan - Razzi<br>
        <div class = "subtitle">Shunidhi Chaunhan</div>`,
        poster:'/Palak/img/33.jpg'
    },
    {
        id:36,
        songName:`Oo Bedardeya<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'/Palak/img/34.jpg'
    },
    {
        id:37,
        songName:`Apna Bana Le Piya<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/30.jpg'
    },
    {
        id:38,
        songName:`Sun Sathiya - mp3<br>
        <div class = "subtitle">Priya Saraiya, Divya Kumar</div>`,
        poster:'img/31.jpg'
    },
    {
        id:39,
        songName:`Mann Mast Malang<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/32.jpg'
    },
    {
        id:40,
        songName:`Sparkle - Your Name<br>
        <div class = "subtitle">Anny K</div>`,
        poster:'img/33.jpg'
    },
    {
        id:41,
        songName:`Mere meheboob Qayamat hogi<br>
        <div class = "subtitle">Abhay Jain</div>`,
        poster:'img/34.jpg'
    },
    {
        id:42,
        songName:`Vaaste - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavi Bhanushali</div>`,
        poster:'img/35.jpg'
    },
    {
        id:43,
        songName:`Nede Nede - Yaarana Da Kecthup<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/36.jpg'
    },
    {
        id:44,
        songName:`Manike maake Hiite<br>
        <div class = "subtitle">Yohani</div>`,
        poster:'img/37.jpg'
    },
    {
        id:45,
        songName:`Kya itna Bura hu mai maa<br>
        <div class = "subtitle">Sankar madhavan</div>`,
        poster:'img/38.jpg'
    },
    {
        id:46,
        songName:`Dehelizz pe mere dil ki jo rakke hai<br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'img/39.jpg'
    },
    {
        id:47,
        songName:`Tera Yaar hu mai<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/40.jpg'
    },
    {
        id:48,
        songName:`Teri mitti mai mil Jawa<br>
        <div class = "subtitle">B-Praak</div>`,
        poster:'img/41.jpg'
    },
    {
        id:49,
        songName:`Tere Jaisa Yaar Kahan
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/42.jpg'
    },
    {
        id:50,
        songName:`SaudeBazzi - Javed Ali<br>
        <div class = "subtitle">Javed Ali</div>`,
        poster:'img/43.jpg'
    },
    {
        id:51,
        songName:`Tarasti hai Nigahe - Azim<br>
        <div class = "subtitle">Azim Azhar</div>`,
        poster:'img/44.jpg'
    },
    {
        id:52,
        songName:`Saiboo - Shor in the City<br>
        <div class = "subtitle">Shreya Ghosal</div>`,
        poster:'img/45.jpg'
    },
    {
        id:53,
        songName:`Afreeen Afreeen <br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/46.jpg'
    },
    {
        id:54,
        songName:`Oo Khuda -  Palak<br>
        <div class = "subtitle">Palak Mucchal, Amaal Malik</div>`,
        poster:'img/47.jpg'
    },
    {
        id:55,
        songName:`Deva Deva - Arijit Singh<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/18.jpg'
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
        music.src = `sonu/music/${index}.mp3`;
        poster.src = `sonu/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `sonu/music/${index}.mp3`

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
    music.src = `sonu/music/${index}.mp3`;
        poster.src = `sonu/img/${index}.jpg`;
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

    music.src = `sonu/music/${index}.mp3`;
        poster.src = `sonu/img/${index}.jpg`;
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

    music.src = `sonu/music/${index}.mp3`;
        poster.src = `sonu/img/${index}.jpg`;
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
    music.src = `sonu/music/${index}.mp3`
    poster.src = `sonu/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sonu/music/${index}.mp3`
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
    music.src = `sonu/music/${index}.mp3`
    poster.src = `sonu/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sonu/music/${index}.mp3`
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
    music.src = `sonu/music/${index}.mp3`
    poster.src = `sonu/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `sonu/music/${index}.mp3`
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



