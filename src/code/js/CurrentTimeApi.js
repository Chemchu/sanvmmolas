import React, { useEffect, useState } from "react";
import axios from 'axios';

const CurrentTimeApi = () => {
    const [date, setHora] = useState({segundos: ""});
    const [time, setFormattedTime] = useState({formattedTime: 500});

    const longVal = '-0.375000';
    const latVal = '39.466667';
    const query = 'http://api.timezonedb.com/v2.1/get-time-zone?key=6D3529824UIJ&format=json&by=position&lat='+ latVal +'&lng=' + longVal;

    let horas, restos, minutos;

    

    const fetchData = async () => {
        const result = await axios.get(query);
        console.log(result.data.formatted);
        setHora({ ...date, segundos: +result.data.formatted.substr(11, 2) * 3600 +  +result.data.formatted.substr(14, 2) * 60 + +result.data.formatted.substr(17,2)});
        console.log("segundos: " + date.segundos);
        setFormattedTime({...time, formattedTime: date.segundos});
    };

    const addTime = () => {
        setHora({...date, segundos: date.segundos++});
        horas = Math.floor(date.segundos / 3600);
        restos = date.segundos % 3600;
        minutos = Math.floor((restos*3600) / 60);
        restos = (restos*3600) % 60;
        setFormattedTime({...time, formattedTime: horas + ":" + minutos + ":" + restos});
    };


    useEffect(() => {
        fetchData();
        var handle = setInterval(addTime, 1000);
        return ()=>{
            clearInterval(handle);
        }
    }, []);

    return(
        <div>
            <h1>
                {date.segundos}
            </h1>
        </div>
    );
}

export default CurrentTimeApi;