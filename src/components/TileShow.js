import {useState} from 'react'

function TileShow({tile, id, onAdd})
{
    // const [letter,setLetter] = useState('');

    const handleChange = (e) => 
    {
        onAdd(e.target.value,id);
    }

    return(
            <input className= {tile.color} value = {tile.letter} onChange = {handleChange} minLength={1} maxLength={1} />
    )
}

export default TileShow;