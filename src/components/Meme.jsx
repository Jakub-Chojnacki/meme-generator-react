import memesData from '../data.js'
import {useState} from 'react'
export default function Meme(){
     const [meme, setMeme] = useState({
         topText: "",
         bottomText: "",
         randomImage: "http://i.imgflip.com/1bij.jpg"
     });
     const  [allMemeImages, setAllMemeImages] = useState(memesData)
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme,
            randomImage: url}
        });
        
    }
    return (
        <div className="meme">
            <div className="meme__input-container">
                <input type="text" placeholder="Shut up" className="meme__input"/>
                <input type="text" placeholder="and take my money" className="meme__input" />
            </div>
            <button className="meme__button" onClick={getMemeImage}>Get a new meme image</button>
            <img src={meme.randomImage} alt="" className="meme__image" />
        </div>
    )
}