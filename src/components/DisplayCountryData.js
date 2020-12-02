import React from 'react'
import CountUp  from 'react-countup';
export default function DisplayCountryData ({confirmed, deaths, recovered}) {
    return (
        <div>
            <h4>Confirmed: <CountUp start='0' end={confirmed}/></h4>
            <h4>Deaths: <CountUp start='0' end={deaths}/></h4>
            <h4>Recovered: <CountUp start='0' end={recovered}/></h4>
            
            
        </div>
    )
}
