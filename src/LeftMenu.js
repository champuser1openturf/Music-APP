import React from 'react';
import './LeftMenu.css';

function LeftMenu({title,Icon}) {
    return(
        <div className="leftMenu">
            {Icon && <Icon className="leftMenu-icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    );

}

export default LeftMenu;