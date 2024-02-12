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
        songName:`Khaun Tuje Yu Pyar Karega<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/1.jpg'
    },
    {
        id:2,
        songName:`Jab Tum Chhaoo - Prem ratan Dhan Paayoo<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/2.jpg'
    },
    {
        id:3,
        songName:`Chaau Mai Yaa Naa - Aashiqui 2<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/3.jpg'
    },
    {
        id:4,
        songName:`Teri Meri Khahani - Gabbar Is Back<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/4.jpg'
    },
    {
        id:5,
        songName:`Panchi Bole Hai Kya - Bahubali<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/5.jpg'
    },
    {
        id:6,
        songName:`Prem Ratan Dhan Payeoo<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/6.jpg'
    },
    {
        id:7,
        songName:`Ek Do Teen - Baaghi 2<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/7.jpg'
    },
    {
        id:8,
        songName:`Udd Jaa Kaale Kaava - Gaddar 2<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/8.jpg'
    },
    {
        id:9,
        songName:`Naiyoo Lagda - Kishi ka Bhai kishi ki jaan<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/9.jpg'
    },
    {
        id:10,
        songName:`Kabhi Tumhe - Shershah<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/10.jpg'
    },
    {
        id:11,
        songName:`Khoo Gaye - Palak Mucchal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/11.jpg'
    },
    {
        id:12,
        songName:`Teri Saansho Mai - Karle le Pyar<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/12.jpg'
    },
    {
        id:13,
        songName:`Dekha Hazzaoo Daffa - Rustom<br>
        <div class = "subtitle">Palak Muchhal, Arijit Singh</div>`,
        poster:'/Palak/img/13.jpg'
    },
    {
        id:14,
        songName:`Zindagi Bana lu - Sweetie Weds NRI<br>
        <div class = "subtitle">Palak Muchhal, Tulsi Kumar</div>`,
        poster:'/Palak/img/14.jpg'
    },
    {
        id:15,
        songName:`Kaabil Hu - Kaabil<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/15.jpg'
    },
    {
        id:16,
        songName:`Kabhi Yaado Mai - Palak Muchhal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/16.jpg'
    },
    {
        id:17,
        songName:`Hue Bechain pehli baar<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/17.jpg'
    },
    {
        id:18,
        songName:`Aaj Unse Milna Hai Haame<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/18.jpg'
    },
    {
        id:19,
        songName:`Chaap Tilak - Palak Muchhal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/19.jpg'
    },
    {
        id:20,
        songName:`Musafir - Palak Mucchal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/20.jpg'
    },
    {
        id:21,
        songName:`Nain - Palak Muchhal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/21.jpg'
    },
    {
        id:22,
        songName:`Sanam Teri Kasam<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/22.jpg'
    },
    {
        id:23,
        songName:`Meri Aashiqui - Aashiqui 2<br>
        <div class = "subtitle">Palak Muchhal, Arijit Singh</div>`,
        poster:'/Palak/img/23.jpg'
    },
    {
        id:24,
        songName:`O Khuda - Hero<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/24.jpg'
    },
    {
        id:25,
        songName:`Saayaan Re - Palak Mucchal<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/25.jpg'
    },
    {
        id:26,
        songName:`Dhokha Dhadi - R Rajkumar<br>
        <div class = "subtitle">Palak Muchhal, Arijit Singh</div>`,
        poster:'/Palak/img/26.jpg'
    },
    {
        id:27,
        songName:`Aankhon Mai Aanshu - Palak Muchhal<br>
        <div class = "subtitle">Dhavni Bhanushali</div>`,
        poster:'/Palak/img/27.jpg'
    },
    {
        id:28,
        songName:`Hua Hai Aaj Peheli Baar - Sanam Ree<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/28.jpg'
    },
    {
        id:29,
        songName:`Muskhurahe Hai - Mr. X<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/29.jpg'
    },
    {
        id:30,
        songName:`Weeding Song - Sweetie Weds NRI<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/30.jpg'
    },
   
    {
        id:31,
        songName:`Kun Faaya Kun - Rockstar<br>
        <div class = "subtitle">A.R Reheman, Javed Ali</div>`,
        poster:'/Palak/img/31.jpg'
    },
    {
        id:32,
        songName:`Kissi Din Banungi Mai Raja Ki Rani<br>
        <div class = "subtitle">Shunidhi Chaunhan</div>`,
        poster:'/Palak/img/32.jpg'
    },
    {
        id:33,
        songName:`Ae Watan - Razzi<br>
        <div class = "subtitle">Shunidhi Chaunhan</div>`,
        poster:'/Palak/img/33.jpg'
    },
    {
        id:34,
        songName:`Oo Bedardeya<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'/Palak/img/34.jpg'
    },
    {
        id:35,
        songName:`Vaaste - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavi Bhanushali</div>`,
        poster:'/Palak/img/35.jpg'
    },
    {
        id:36,
        songName:`Le ja - Dhavni Bhanushali<br>
        <div class = "subtitle">Dhavni Bhanushali</div>`,
        poster:'/Palak/img/36.jpg'

    },
    {
        id:37,
        songName:`Khariyat Puccho - Chicchore<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'/Palak/img/37.jpg'
    },
    {
        id:38,
        songName:`Lo Safar Suru Hogaya - Baaghi 2<br>
        <div class = "subtitle">Armaan Malik</div>`,
        poster:'/Palak/img/38.jpg'
    },
    {
        id:39,
        songName:`Yaad Piya Ki Aane Lagi<br>
        <div class = "subtitle">Neha Kakkar</div>`,
        poster:'/Palak/img/39.jpg'
    },
    {
        id:40,
        songName:`Tu Maan Meri Jaan - King<br>
        <div class = "subtitle">King</div>`,
        poster:'/Palak/img/40.jpg'
    },
    {
        id:41,
        songName:`Tu Pyar Hai Kisi Aur Ka<br>
        <div class = "subtitle">B-Praak</div>`,
        poster:'/Palak/img/41.jpg'
    },
    {
        id:42,
        songName:`Dilbar - Satyamave Jayate<br>
        <div class = "subtitle">Neha Kakkar</div>`,
        poster:'/Palak/img/42.jpg'
    },
    {
        id:43,
        songName:`Khaun Tuje Yu Pyar Karega<br>
        <div class = "subtitle">Palak Muchhal</div>`,
        poster:'/Palak/img/1.jpg'
    },
    {
        id:44,
        songName:`Mai Rooyan - Yasser Desai<br>
        <div class = "subtitle">Yasser Desai</div>`,
        poster:'/Palak/img/44.jpg'
    },
    {
        id:45,
        songName:`Aarariraro Raaro<br>
        <div class = "subtitle">Deepti Suresh</div>`,
        poster:'/Palak/img/45.jpg'
    },
    {
        id:46,
        songName:`Aankhon mein teri Ajab Si <br>
        <div class = "subtitle">Aatif Aslam</div>`,
        poster:'/Palak/img/46.jpg'
    },
    {
        id:47,
        songName:`Main Agar Khaoon<br>
        <div class = "subtitle">Shreya Ghoshal, Sonu Nigam</div>`,
        poster:'/shreya/img/13.jpg'
    },
    {
        id:48,
        songName:`Bhahara Bhahara - Shreya Ghosal<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/14.jpg'
    },
    {
        id:49,
        songName:`Nagaree Sang Dhol Baaje<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/15.jpg'
    },
    {
        id:50,
        songName:`Agar Tum Mil Jaaoo<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/16.jpg'
    },
    {
        id:51,
        songName:`Oo La La Oo La La<br>
        <div class = "subtitle">Shreya Ghoshal, Bappi Leheri</div>`,
        poster:'/shreya/img/17.jpg'
    },
    {
        id:52,
        songName:`Mannva Lagge - Happy New Year<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/18.jpg'
    },
    {
        id:53,
        songName:`Tuj Mai Rab Dikkta Hai<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/19.jpg'
    },
    {
        id:54,
        songName:`Ek Do Teen - Baaghi 2<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/20.jpg'
    },
    {
        id:55,
        songName:`Jeene Laga Hu Pehele Se Jayada<br>
        <div class = "subtitle">Atif Aslam,Shreya Ghoshal</div>`,
        poster:'/shreya/img/21.jpg'
    },
    {
        id:56,
        songName:`Param Sundri - Mimi<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/22.jpg'
    },
    {
        id:57,
        songName:`Khabrr ye aayi Hai waaha Se<br>
        <div class = "subtitle">Shreya Ghoshal</div>`,
        poster:'/shreya/img/23.jpg'
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
        music.src = `Palak/music/${index}.mp3`;
        poster.src = `Palak/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `Palak/music/${index}.mp3`

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
    music.src = `Palak/amusic/${index}.mp3`;
        poster.src = `Palak/img/${index}.jpg`;
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

    music.src = `Palak/music/${index}.mp3`;
        poster.src = `Palak/img/${index}.jpg`;
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

    music.src = `Palak/music/${index}.mp3`;
        poster.src = `Palak/img/${index}.jpg`;
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
    music.src = `Palak/music/${index}.mp3`
    poster.src = `Palak/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Palak/music/${index}.mp3`
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
    music.src = `Palak/music/${index}.mp3`
    poster.src = `Palak/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Palak/music/${index}.mp3`
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
    music.src = `Palak/music/${index}.mp3`
    poster.src = `Palak/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Palak/music/${index}.mp3`
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



