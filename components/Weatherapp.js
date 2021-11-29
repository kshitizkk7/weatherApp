import React,{useEffect,useState} from "react";
import "./css/temp.css";
const Weatherapp = () => {
    const [city, setCity]= useState(null);
    const [search,setSearch]=useState("London");
    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=59bba33d56c3d64128e4d2ab214c9468`
            const response = await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
            
        };
        fetchApi();
    },[search]
         
    )
    return (
        <>
        <div className="box">
            <div className="inputData">
                <input 
                type="search"
                value={search}
                className="inputField"
                onChange={(event)=>{ setSearch(event.target.value)}}/>
                            </div>

        {!city ? (
            <p className="errorMsg">No Data Found</p>
        ) : (
        <div>
            <div className="info">
            <h2 className="location">
                <i className="fas fa-street-view"></i>{search}</h2>
                <h1 className="temp">{city.temp}*C</h1>
                <h3 className="tempmin_max">Min : {city.temp_max} *C|| Max : {city.temp_min}cel</h3>

        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>

</div>
        )

        }
    
        <div className="wave -three"></div>
        
        </div>
        </>
    )
}
export default Weatherapp;