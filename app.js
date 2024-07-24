const music = new Audio('vande.mp3');
 //create Array

const songs = [
   { id :'1',
    songName: ' U Mang? <br> <div class="subtitle">Jobo</div>',
    poster: "img/1.jpg"
   },
   { id :'2',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'3',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'4',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'5',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'6',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'7',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'8',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'9',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'10',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'11',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'12',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'13',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'14',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   },
   { id :'15',
    songName: ' The_mba-Godly  <br> <div class="subtitle">The mba</div>',
    poster: "img/5.jpg"
   }
]
Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName 

})

let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementsByClassName('wave')[0]


masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play()
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        wave.classList.add('active2')
    } else{
        music.pause()
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill')
            element.classList.remove('bi-pause-circle-fill')
    
        })
    }


let index = 0
let poster_master_play = document.getElementById('poster_master_play')
let title = document.getElementById('title')

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id
        makeAllPlays()
        e.target.classList.remove('bi-play-circle-fill')
        e.target.classList.add('bi-pause-circle-fill')
        music.src = `audio/${index}.mp3`
        poster_master_play.src = `img/${index}.jpg`
        music.play()
    })
})

 