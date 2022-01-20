import memesData from '../data.js'
import {useState} from 'react'
export default function Meme(){
     const [memeImage, setMemeImage] = useState(memesData.data.memes[0].url);
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url);
        
    }
    return (
        <div className="meme">
            <div className="meme__input-container">
                <input type="text" placeholder="Shut up" className="meme__input"/>
                <input type="text" placeholder="and take my money" className="meme__input" />
            </div>
            <button className="meme__button" onClick={getMemeImage}>Get a new meme image</button>
            <img src={memeImage} alt="" className="meme__image" />
        </div>
    )
}