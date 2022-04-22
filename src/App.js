import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"


const App = () => {
    const [city, setCity] = useState();
    const [max, setMax] = useState();
    const [min, setMin] = useState();
    const [temp, setTemp] = useState();
    const [wind, setWind] = useState();
    useEffect(() => {

        async function weather() {

            const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d392dfa7401aa8be10623914caf04469`)
            console.log(responce);
            setMax(responce.data.main.temp_max);
            setMin(responce.data.main.temp_min);
setTemp(responce.data.main.temp);
setWind(responce.data.wind.speed);
        }
        weather();
    }

    );



    return (
        <>
            <div className="bigcontainer">
                <div className="container">
                    <div className="element">
                        <div ><input className="search" placeholder="Enter City Name" type="search" value={city} onChange={(e) => { setCity(e.target.value); }}></input>
                        </div>

                        <div className="element">
                            <h1>Temperature:{temp}</h1>
                        
                            <div className="minmax" ><h3>Min Temp:{min}</h3>
                            <h3>&nbsp;|&nbsp;</h3>
                            <h3>Max Temp:{max}</h3>
                            </div>
                            <h2>Wind Speed:{wind}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

}
export default App;


