import React from 'react'
import Noticia from './Noticia'
import PropTypes from "prop-types"

function ListadoNoticias({noticias}) {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    )
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.object.isRequired
}

export default ListadoNoticias
