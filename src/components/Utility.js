
import {useState} from 'react';
import './Utility.css'

function Utility({tiles, wordArray, onReveal})
{
    const [btnDisable, setBtnDisable] = useState(false)

    const randomIndexGenerator = () => Math.floor(Math.random() * 5)

    const handleClick = (e) => {

       let flag = true;
       while(flag)
       {
            const randomIndex = randomIndexGenerator();
            if(tiles[randomIndex].canBeRevealed)
            {
                onReveal(randomIndex, wordArray[randomIndex]);
                flag = false;
                setBtnDisable(!btnDisable)
            }
       }
    }


    

    return(
        <div>
            <button className='btn utlity--btn' disabled = {btnDisable} onClick = {handleClick}>UTILITY</button>
            
        </div>)
}

export default Utility;