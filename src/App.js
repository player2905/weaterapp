import { useState, useEffect } from 'react';
import {useHttp} from './hooks/http.hook';

import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
}, [])

  const {request} = useHttp();

  const getFilms = async () => {
    const res = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=NOVEMBER')
    _transformFilms(res);
}

let newFilms;

const _transformFilms = (res) => {
  
  setFilms(res.items.map((films) => ({
      name: films.nameEn,
      posterUrl: films.posterUrl,
      premier: films.premiereRu

  })))
}

const renderFilms = (arr) => {
  console.log(arr);
  let slide = 0;
  let items = arr.map((item, i) => {
    
    const active = i === slide ? 'carousel-item active' : 'carousel-item';

    return (
      <>
        <div class={active}>
          <img src={item.posterUrl} className="d-block w-100" alt="..."/>
        </div>
      </>
    )
  })

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
          {items}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
    onClick={() => slide++}>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>    

  )
}

const items = renderFilms(films);
// console.log(items);
return (
    <>  
        <div className='container__slider'>
        {items}

        </div>
        <button 
          type="button" 
          className="btn btn-primary"
          >
            Primary
        </button>
    </>
  )
}

export default App;

          
/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/* <div className="card cardwrapper" key={i}>
            <img src={item.posterUrl} className="card-img-top" alt="..."/>
        </div>  */