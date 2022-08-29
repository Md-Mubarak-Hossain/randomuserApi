const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const countryContainer = document.getElementById('country');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-div');
        // console.log(country.capital[0]);
        countryDiv.innerHTML = `
        <h4>Name: ${country.name.common} </h4>
        <h5>Capital: ${country.capital}</h5>
       <button onclick="countryDetailes('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    });
}

const countryDetailes = (code) => {
    // console.log('country details');
    // console.log(code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailes(data[0]))
}

const displayDetailes = country => {
    // console.log(detailes);
    const countryDetailes = document.getElementById('country-detailes');
    // countryDetailes.classList.add('country-div2');
    countryDetailes.innerHTML = `
    
    <h2 style="color:blue; height:50px;">Country name:${country.name.common.slice(0, 30)}</h2>
    <img height=80px; width=160px; src='${country.flags.png}' >
    <h4 style="color:red;">Capital name:${country.capital}</h4>
    <h4 style="color:sky;margin-right:20px;">Area :${country.area}</h4>
    <h4 style="color:violet;">country region:${country.region}</h4> 
    
    `;
}
loadCountries();