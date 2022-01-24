import memesData from '../data.js'
import {useState} from 'react'
export default function Meme(){
     const [meme, setMeme] = useState({
         topText: "",
         bottomText: "",
         randomImage: "http://i.imgflip.com/1bij.jpg"
     });
     function handleChange(event){
         const {name,value,checked,type} = event.target
        setMeme(prev => {
            return{
                ...prev,
            [name]: type === "checkbox" ? checked : value
            } 

        })
     }

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
                <input type="text" placeholder="Shut up" className="meme__input" name="topText" onChange={handleChange} value={meme.topText}/>
                <input type="text" placeholder="and take my money" className="meme__input" name="bottomText" onChange={handleChange} value={meme.bottomText} />
            </div>
            <button className="meme__button" onClick={getMemeImage}>Get a new meme image</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}