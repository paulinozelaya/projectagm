import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Image = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'http://localhost:5000',
            url: '/images',
          })
            .then(({ data }) => {
              setData(data)
            })
            .catch(err => console.dir(err))
            .finally(() => setLoading(false))
    }, [])

    return (  
      <section className="App">
        <div className="row">
        {loading && "Cargando..."}
        {!!data && data.length > 0 ? data.map((product) => {
            return(
              <div key={product.id} className='col s6'>
                <div  className="card large">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img style={{width:200,height:200,left:80,margin:50}} className="activator" src={product.image} alt={product.title}/>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" title='Click aquí para ver descripción completa'>{product.title}<i className="material-icons right">more_vert</i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{product.Description}<i className="material-icons right">close</i></span>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            )   
          }):(<p>API no retornado ningún producto, intentalo nuevamente.</p>)
        }
        </div> 
      </section>
    )
}
