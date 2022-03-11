import React, { Component } from 'react';

class WeatherAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            items : []
        }
    }
    componentDidMount() {
        fetch("https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
                "X-RapidAPI-Key": "9031972a10msh2639332d23f1125p19cb50jsn74e10f029f45"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }
    render() {
        return(
            <>
            </>
        )
    }
}

export default WeatherAPI;