const songs=[
"bensound-creativeminds.mp3",
"bensound-goinghigher.mp3",
"bensound-hey.mp3"
]
// Song List
const createSongList= ()=> {
	const list = document.createElement('ol')

	for(let i=0; i<songs.length; i++){
		const item = document.createElement('li')
		item.appendChild(document.createTextNode(songs[i]))

		list.appendChild(item)
	}

	return list
}


document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
	const clickedItem = e.target
	const source= document.getElementById('source')
	source.src='songs/'+clickedItem.innerText
	console.log(clickedItem.innerText)

	document.getElementById('currentlyPlayingSong').innerText ="Currently Playing: "
	document.getElementById('currentSong').innerText =clickedItem.innerText

	player.load()
	player.play()

}
 // Play and Pause
const playAudio =() =>{
	if(player.readyState){
		player.play()
	}
}

const pauseAudio =() =>{
	player.pause()

}

// Voulume slider

const slider =document.getElementById ('volumeSlider')
slider.oninput =(e) =>{
	const volume = e.target.value
	player.volume = volume

}

// Update progressBar
const updateProgress =() => {
	if (player.currentTime>0){
	const progressBar=document.getElementById('progress')
	progressBar.value = (player.currentTime/player.duration)*100	
	}
	
}

