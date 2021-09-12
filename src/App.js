import React, { Fragment, useState, useEffect } from "react"
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  const apiKey = "91186f327fdd4b348eb43527f5dabd7b"

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    
    const consultarApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=jp&category=${categoria}&apiKey=${apiKey}`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      setNoticias(noticias.articles)
    }
    consultarApi()
  }, [categoria])


  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />
      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>

    </Fragment>
  )
}

export default App;
