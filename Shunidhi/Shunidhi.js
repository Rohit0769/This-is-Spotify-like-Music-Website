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
        songName:`Ae Watan - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/1.jpg'
    },
    {
        id:2,
        songName:`Saami Saami - Pushpa<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/2.jpg'
    },
    {
        id:3,
        songName:`Sheila ki Jaawani<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/3.jpg'
    },
    {
        id:4,
        songName:`Beedi Jalaile - Sunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/4.jpg'
    },
    {
        id:5,
        songName:`Halkat Jawaani - Sunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/5.jpg'
    },
    {
        id:6,
        songName:`Sajde - Khatta Mettha<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/6.jpg'
    },
    {
        id:7,
        songName:`Kamli - Dhoom 3<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/7.jpg'
    },
    {
        id:8,
        songName:`Show Me the Thumka<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/8.jpg'
    },
    {
        id:9,
        songName:`Dilliwaali GirlFriend - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan, Arijit Singh</div>`,
        poster:'/Shunidhi/img/9.jpg'
    },
    {
        id:10,
        songName:`Crazy Kiya Reee - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/10.jpg'
    },
    {
        id:11,
        songName:`Chhaliya Chhaliya - Sunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/11.jpg'
    },
    {
        id:12,
        songName:`Ainvayi Ainvayi - Loot Gaya<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/12.jpg'
    },
    {
        id:13,
        songName:`Dhoom Machale - Dhoom Machale<br>
        <div class = "subtitle">Shunidhi Chauhan, Sonu Nigam</div>`,
        poster:'/Shunidhi/img/13.jpg'
    },
    {
        id:14,
        songName:`Main Bariya Tu bhi Bariya<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/14.jpg'
    },
    {
        id:15,
        songName:`The Disco Song - Student of the Year<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/15.jpg'
    },
    {
        id:16,
        songName:`Kyon - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/16.jpg'
    },
    {
        id:17,
        songName:`Meheboob Mere - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/17.jpg'
    },
    {
        id:18,
        songName:`Navrai Maajhi - MOM<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/18.jpg'
    },
    {
        id:19,
        songName:`Ishq Kabhi Kariyo Na<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/19.jpg'
    },
    {
        id:20,
        songName:`Ishq Samundhar - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/20.jpg'
    },
    {
        id:21,
        songName:`Mujhse Shaadhi Karogi<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/21.jpg'
    },
    {
        id:22,
        songName:`Deedar De - Dus<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/22.jpg'
    },
    {
        id:23,
        songName:`Say Shava Shava - Kabhi Khushi Kabhi Gam<br>
        <div class = "subtitle">Shunidhi Chauhan, ALka Yagnik</div>`,
        poster:'/Shunidhi/img/23.jpg'
    },
    {
        id:24,
        songName:`Ra Ra Rakkamma - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan, Nakash Azziz</div>`,
        poster:'/Shunidhi/img/24.jpg'
    },
    {
        id:25,
        songName:`Tuj ko Na Dehku too - Jaanwar<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/25.jpg'
    },
    {
        id:26,
        songName:`Jo Chaahe Dilli Mumbai Agar<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/26.jpg'
    },
    {
        id:27,
        songName:`Imaan Dol Jaayega - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/27.jpg'
    },
    {
        id:28,
        songName:`Aisa Kyun Maa - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/28.jpg'
    },
    {
        id:29,
        songName:`Chokraa Jawaa Ree - Shunidhi Chauhan<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/29.jpg'
    },
    {
        id:30,
        songName:`Ban Than Chali Mai<br>
        <div class = "subtitle">Shunidhi Chauhan</div>`,
        poster:'/Shunidhi/img/30.jpg'
    },
    {
        id:31,
        songName:`Har Kiski Ko Nahi Milta Yaha Pyarr Jindgi mai<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/1.jpg'
    },
    {
        id:32,
        songName:`Hamari adhuri Khahani<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/2.jpg'
    },
    {
        id:33,
        songName:`Satranga Ishq<br>
        <div class = "subtitle">Arijit Singh</div>`,
        poster:'img/3.jpg'
    },
    {
        id:34,
        songName:`Tum Too Thehere Pardeshi<br>
        <div class = "subtitle">Abhay Jain</div>`,
        poster:'shreya/img/34.jpg'
    },
    {
        id:35,
        songName:`Tu Maan Meri Jaan - King<br>
        <div class = "subtitle">King</div>`,
        poster:'/Palak/img/40.jpg'
    },
    {
        id:36,
        songName:`Thore Kam Ajnabi<br>
        <div class = "subtitle">Arijit Singh, Himani Kapoor</div>`,
        poster:'img/5.jpg'
    },
    {
        id:37,
        songName:`Papa Meri Jaan - Animal<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/1.jpg'
    },
    {
        id:38,
        songName:`Jaane Nahi Denge Tujhe - 3 Idiots<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/2.jpg'
    },
    {
        id:39,
        songName:`Bhagwaan Hai Khaha Re Tu<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/3.jpg'
    },
    {
        id:40,
        songName:`Abhi Mujme Khahi - Agnipath<br>
        <div class = "subtitle">Sonu Nigam</div>`,
        poster:'/sonu/img/4.jpg'
    },
    {
        id:41,
        songName:`Teri Ore - Singh is King<br>
        <div class = "subtitle">Rafet Ali Khan, Shreya Ghoshal</div>`,
        poster:'rafet/img/13.jpg'
    },
    {
        id:42,
        songName:`Tum Jo Aaye Zindagi Mai<br>
        <div class = "subtitle">Rafet Ali Khan, Tulsi Kumar</div>`,
        poster:'rafet/img/14.jpg'
    },
    {
        id:43,
        songName:`Sanu Ek Pal Chain Na Aave - Raid <br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/15.jpg'
    },
    {
        id:44,
        songName:`Dagabazz Re - Dabangg 2 <br>
        <div class = "subtitle">Rafet Ali Khan, Shreya Ghosal</div>`,
        poster:'rafet/img/16.jpg'
    },
    {
        id:45,
        songName:`Tere Mast Mast Do Nain - Dabangg<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/17.jpg'
    },
    {
        id:46,
        songName:`Bol Na Halke Halke - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/18.jpg'
    },
    {
        id:47,
        songName:`Jag Soona Soona Laage - Om Shanti Om<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/19.jpg'
    },
    {
        id:48,
        songName:`Aaj Din Chadeyaa - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/20.jpg'
    },
    {
        id:49,
        songName:`Surili Aankhiyoo Waale - Veer<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/21.jpg'
    },
    {
        id:50,
        songName:`Lag Ja Gale - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/22.jpg'
    },
    {
        id:51,
        songName:`Aas Pass Khuda - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/23.jpg'
    },
    {
        id:52,
        songName:`Nit Khair Manda - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/24.jpg'
    },
    {
        id:53,
        songName:`Tu Itni Khubshurat Hai - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/25.jpg'
    },
    {
        id:54,
        songName:`Dillagi - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/26.jpg'
    },
    {
        id:55,
        songName:`Ishqiya - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/27.jpg'
    },
    {
        id:56,
        songName:`Tere Bin - Simmba<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/28.jpg'
    },
    {
        id:57,
        songName:`Saware - Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/29.jpg'
    },
    {
        id:58,
        songName:`Lagan Lagi Tummshe -Rafet Ali Khan<br>
        <div class = "subtitle">Rafet Ali Khan</div>`,
        poster:'rafet/img/30.jpg'
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
        music.src = `Shunidhi/music/${index}.mp3`;
        poster.src = `Shunidhi/img/${index}.jpg`;
        music.play()
        masterPlay.classList.remove('bi-play-fill') 
        masterPlay.classList.add('bi-pause-fill')

        download_music.href = `Shunidhi/music/${index}.mp3`

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
    music.src = `Shunidhi/amusic/${index}.mp3`;
        poster.src = `Shunidhi/img/${index}.jpg`;
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

    music.src = `Shunidhi/music/${index}.mp3`;
        poster.src = `Shunidhi/img/${index}.jpg`;
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

    music.src = `Shunidhi/music/${index}.mp3`;
        poster.src = `Shunidhi/img/${index}.jpg`;
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
    music.src = `Shunidhi/music/${index}.mp3`
    poster.src = `Shunidhi/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Shunidhi/music/${index}.mp3`
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
    music.src = `Shunidhi/music/${index}.mp3`
    poster.src = `Shunidhi/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Shunidhi/music/${index}.mp3`
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
    music.src = `Shunidhi/music/${index}.mp3`
    poster.src = `Shunidhi/img/${index}.jpg`;
    music.play()
    masterPlay.classList.remove('bi-play-fill') 
    masterPlay.classList.add('bi-pause-fill')
    download_music.href = `Shunidhi/music/${index}.mp3`
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



