import RandomWords from "./RandomWords";
import {useState} from 'react';
import './App.css'
import TileList from './components/TileList'
import Utility from './components/Utility'

const word = RandomWords();
const wordArray = word.split(''); 

function App()
{
    let correctCounter = 0;
    const [turn, setTurn] = useState(5);
    const [score, setScore] = useState(100);
    const [tiles, setTiles] = useState([{letter: '', index: 0, color: '', canBeRevealed: true},
                                        {letter: '', index: 1, color: '', canBeRevealed: true},
                                        {letter: '', index: 2, color: '', canBeRevealed: true},
                                        {letter: '', index: 3, color: '', canBeRevealed: true},
                                        {letter: '', index: 4, color: '', canBeRevealed: true}]);
                                        
    const handleReveal = (i, ltr) => {
        correctCounter++;
        const updatedTiles = tiles.map( (tile, index) =>{
            if(i === index)
            {
                tile.color = 'green'
                tile.letter = ltr;
                tile.canBeRevealed = false;
            }
            
            return tile;
        })
        
        setScore(score - 50);
        setTiles(updatedTiles);

    }
    const [content, setContent] = useState(<div>  
            <div className="utility">
                <Utility score = {score} wordArray={wordArray} tiles = {tiles} onReveal={handleReveal}  />
            </div>
    </div>)
 


    const addTileData = (ltr, i) => {

        const updatedData = tiles.map( (tile, index) => {
            if(tile.index === i)
            {
                tile.letter = ltr;
            }

            return tile
        })

        setTiles(updatedData);
    }

    const tilesValidation = (tileData) => {
        
        
        const updated = tileData.map((tile, index) =>
        {
            if(tile.letter === wordArray[index])
            {
                const updatedProperty = tiles.map( (t, i) => {
                    if(i === index)
                    {
                        t.color = "green";
                        correctCounter++;
                    }
                    return t;
                })           
                setTiles(updatedProperty);
            }
            else
            {
                if(wordArray.includes(tile.letter))
                {
                    const updatedProperty = tiles.map( (t, i) => {
                        if(i === index)
                        {
                            t.color = "yellow";
                        }
                        return t;
                    })           
                    setTiles(updatedProperty);
                }
                
                else
                {
                    const updatedProperty = tiles.map( (t, i) => {
                        if(i === index)
                        {
                            t.color = "red";
                        }
                        return t;
                    })           
                    setTiles(updatedProperty);
                }
            }
            return tile;
        })

        if(correctCounter === 5)
        {
            const newContent = <div className = "win--lose">
                <h3>YOU WIN✅</h3>
            </div>
            setContent(newContent)
        }

        else
        {
            setTurn(turn - 1);
            setScore(score - 10);
            setContent(<div>  
                <div className="utility">
                    <Utility score = {score} wordArray={wordArray} tiles = {tiles} onReveal={handleReveal}  />
                </div>
                </div>)
        }

        if(turn === 1)
        {
            const newContent = <div className = "win--lose">
            <h3>YOU LOSE❌</h3>
            <p className="word">The word was: <span>{word}</span></p>
        </div>
        setContent(newContent)

        }
        setTiles(updated);
    } 

    return(
        <div>
            <div className = "heading">
                <h1>Word-Play</h1>
            </div>

            <div>
                <TileList  tiles = {tiles}  onAdd = {addTileData} onValid = {tilesValidation}/>
            </div>

            <div className = "turns">
                <div>
                    <span className ="turn"> Turn </span>
                    <span className="score"> Score </span>
                </div>
                
                <div>
                    <span className = "turn-span">  {turn}</span>
                    <span className = "turn-span">  {score}</span>
                </div>

            </div>
           {content}
        </div>)
    
}
export default App;