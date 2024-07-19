import React from 'react';

function Menu({handleChange}){


    function handleFormClick(event){
        handleChange(event.target.value);
    }

    return(
        <form className="form" onChange={handleFormClick}>
            <input type="radio" name="src" value="video1"/>
            Video 1
            <input type="radio" name="src" value="video2"/>
            Video 2
            <input type="radio" name="src" value="video3"/>
            Video 3
            <input type="radio" name="src" value="video4"/>
            Video 4
        </form>
    )
}

export default Menu;