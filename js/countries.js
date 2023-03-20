const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountreis(data))
};

const displayCountreis=countries=>{
    console.log(countries);
    const countryHtml=countries.map(country=>getCountry(country))
    const countryAll=document.getElementById('countries');
    countryAll.innerHTML=countryHtml.join('')
}

const getCountry=country=>{
    return `
       <div class="country">
          <h1>${country.name.common}</h1>
          <img src="${country.flags.png}">
       </div>
    `
}

loadCountries()