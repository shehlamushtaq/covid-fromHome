import React from 'react'
import CountUp  from 'react-countup';
export default function GlobalData({confirmed, deaths, recovered}) {
    return (
        <div>
            <CountUp start='0' end={confirmed}/>
                    <h4>Confirmed: {confirmed}</h4>
                    <h4>Deaths: {deaths}</h4>
                    <h4>Recovered: {recovered}</h4>

            
        </div>
    )
}
