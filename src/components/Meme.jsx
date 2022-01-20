export default function Meme(){
    return (
        <div className="meme">
            <div className="meme__input-container">
                <input type="text" placeholder="Shut up" className="meme__input"/>
                <input type="text" placeholder="and take my money" className="meme__input" />
            </div>
            <button className="meme__button">Get a new meme image</button>
        </div>
    )
}