import React from "react";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
        this.state = {
            weather: null
        };
    }

    render() {
        let content;
        if(this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32;
            content = <div>
                <p>{weather.name}</p>
                <p>{temp.toFixed(1)} degrees</p>
            </div>;
        } else {
            content = <div className="loaoding">Loading...</div>
        }



        return <>
             <h1>Weather</h1>
             <div className="weather">
                 {content}
             </div>
         </>
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.getWeather);
    }

    getWeather(location) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?';       
        let lat = location.coords.latitude;
        let lon = location.coords.longitude;
        let key = "5c6248e3a6f25b3b1793ca866b2086ae"; 

        fetch(`${url}lat=${lat}&lon=${lon}&appid=${key}`)
        .then((res) => {
            return res.json();
        })
        .then((weather) => {
            this.setState({weather: weather});
        });
    }

}