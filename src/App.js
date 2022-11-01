import {useHttp} from './hooks/http.hook';

import './App.css';

function App() {

  const {request} = useHttp();

  const getWeather = async () => {
    const res = await request('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=NOVEMBER')
    console.log(res)
    _transformFilms(res);
}

let newFilms = [];

const _transformFilms = (res) => {
  
  newFilms = res.items.map((films) => ({
      name: films.nameEn,
      posterUrl: films.posterUrl,
      premier: films.premiereRu

  }))

  renderFilms(newFilms)

}

let items

const renderFilms = (newFilms) => {
  items = newFilms.map(item => {
    return (
      <div className="card cardwrapper">
            <img src={item.posterUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.premier}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  })
  console.log(items)

}

const content = items; 

return (
    <>
      <div className="container mb-5">
        {content}
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => getWeather()}>
            Primary
        </button>
      </div>
    </>
  )
}

export default App;
