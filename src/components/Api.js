import React,{useState , useEffect} from 'react'
import axios from 'axios'
import GlobalData from './GlobalData'
import DisplayCountryData from './DisplayCountryData'

const Api = () => {

    const [confirmed , setConfirmed] = useState(null)
    const [recovered , setRecovered] = useState(null)
    const [deaths , setDeaths] = useState(null)
    const [countryURL, setCountryURL] = useState('')

    const [countries , setCountries] = useState([])

    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryData , setCountryData] = useState(null);

    useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api')
        .then(res =>{
                console.log(res)
            setConfirmed(res.data.confirmed.value)
            setRecovered(res.data.recovered.value)
            setDeaths(res.data.deaths.value)
            setCountryURL(res.data.countries)

            axios.get(res.data.countries)
            .then (res2 =>{
                console.log(res2)
                setCountries(res2.data.countries)
            }
                )
        })
    },[])

// useEffect(()=>{
//     axios.get(countryURL)
//         .then(res3 =>{

//     })
// },[countries])

useEffect( ()=>{

    if (selectedCountry !== '') {

        axios.get(countryURL + '/' + selectedCountry)
        .then(res3=>{
            console.log(res3)
            setCountryData(res3.data);
        })

    } else {

        setCountryData(null);

    }

}, [selectedCountry])

    const countryDataView = countryData ? 
        <DisplayCountryData confirmed={countryData.confirmed.value} recovered={countryData.recovered.value} deaths={countryData.deaths.value} />
        :
        null
    ;

    const view2 = countries.length === 0 ?
        null
        :
        <div>
            <select onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="">Select country</option>
                {
                    countries.map ( (item, ind) => <option value={item.name}>{item.name}</option>)
                }

            </select>
            {countryDataView}
        </div>
    ;

    const view = confirmed === '' ? 
        <p>Loading data, please wait ...</p>
        :
        <>
        <GlobalData confirmed={confirmed} deaths={deaths} recovered={recovered} />
        {view2}
        </>
    ;

    return (
        <>
            {view}
    </>
    )
}
export default Api