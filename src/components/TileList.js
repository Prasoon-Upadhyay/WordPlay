import TileShow from "./TileShow";
import './TileList.css'

function TileList({tiles, onAdd, onValid})
{   
    const handleSubmit = (e) =>{
        e.preventDefault();
        onValid(tiles);

    }

    const handleClick = () => {
        window.location.reload();
    }

    const renderedWords = tiles.map((tile, index) => {
            return (<TileShow  tile = {tile} key = {index} id = {index} onAdd = {onAdd}/>)
    })
    return (
        <div className="tile-list">
        
            <form className="tile-list--form" onSubmit = {handleSubmit}>
                {renderedWords}
                
                <div className = "btns"> <br/>
                
                    <button className = "check-btn">
                        C H E C K
                    </button>
                    
                    <button onClick = {handleClick} className = "new-btn">
                        N E W 
                    </button>

                </div>
            </form>
        
        </div>
        )
}

export default TileList;