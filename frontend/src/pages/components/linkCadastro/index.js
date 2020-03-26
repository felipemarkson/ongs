import React  from "react";
import { Link } from 'react-router-dom';

import './styles.css'

function LinkCadastro({to, icon, children}) {
    return(
        <div className="back-link">
            <Link to={to}>
                {icon}
                {children}
            </Link>
        </div>

    )
    
}

export default LinkCadastro