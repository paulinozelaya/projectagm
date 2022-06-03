import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Music = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: 'http://localhost:5000',
            url: '/youtube',
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
        {!!data && data.length > 0 ? data.map((youtube) => {
            return(
              <div key={youtube.id} className='col s6'>
                <div>
                <p>{youtube.title}</p>
                
                <audio src={youtube.url} controls="controls" type="audio/mpeg" preload="preload">
                </audio>
                </div>
              </div>
            )   
          }):(<p>API no retornado ningún producto, intentalo nuevamente.</p>)
        }
        </div> 
      </section>
    )
}