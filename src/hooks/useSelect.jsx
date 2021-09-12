import React, { useState } from 'react'
import PropTypes from "prop-types"

function useSelect( stateInicial, opciones ) {

    const [state, setState] = useState(stateInicial)

    const SelectNoticias = () => (
        <select
          className="browser-default" 
          name="seleccionarCategoria" 
          id="seleccionarCategoria"
          value={state}
          onChange={e => setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )

    return [state, SelectNoticias]
}

useSelect.propTypes = {
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.object.isRequired
}

export default useSelect
