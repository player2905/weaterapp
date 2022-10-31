import {useHttp} from './hooks/http.hook';

import './App.css';

function App() {

  const {request} = useHttp();

  const data = 
  {
      "lat": 49.809,
      "lon": 16.787,
      "model": "gfs",
      "parameters": ["wind", "dewpoint", "rh", "pressure"],
      "levels": ["surface", "800h", "300h"],
      "key": "abcd123"
  }
  

  const getWeather = async () => {
    const res = await request('https://api.tomorrow.io/v4/timelines?location=-64.425889,40.811889&fields=temperature&timesteps=1h&units=metric&apikey=gisok86xfY0jvhnL7XMXnfxt9LnSmYGf')
    console.log(res);
}


  return (
    
    <>
    <button 
      type="button" 
      className="btn btn-primary"
      onClick={() => getWeather()}>
        Primary
    </button>
      {/* <div className="container mb-5">
          <div className="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">Input city</span>
              <input type="text" className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
              <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => getWeather()}>
                Primary
              </button>
          </div>
      </div>

      <div class="container center">
          <div class="row">
                  <div className="card center" style="width: 18rem;">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                  <div className="card center" style="width: 18rem;">
                      <img src="..." className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
                  <div className="card center" style="width: 18rem;">
                      <img src="..." class="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
          </div>
      </div> */}
          
    </>
  )

}

export default App;
