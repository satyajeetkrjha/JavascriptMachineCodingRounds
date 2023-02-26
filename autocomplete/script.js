let countries =[];
const countryList = document.querySelector("#country-list");
const countryInput = document.querySelector("#country-input");

console.log("countrylist ",countryList);
function fetchCountries (){
    fetch("https://restcountries.com/v3.1/all")
    .then((response)=> response.json())
    .then((data)=> {
        countries = data && data.map((item)=> item.name && item.name.common)
        countries.sort();
        console.log("countries ",countries);
        loadData(countries,countryList);

    });
}

function loadData(data,element){
   
   element.innerText=''; 
   if(data){
     element.innerHtml = '';
     data && data.forEach((item) => {
        let country = item;
        let countryName = document.createElement('li');
        countryName.innerText = country;
        element.appendChild(countryName);
     });
   }
}

function filterData(data,searchText){
   return data && data.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
}


fetchCountries();

countryInput.addEventListener('input',function(){
   console.log("countries......",countries);  
   const filteredData = filterData(countries,countryInput.value);
   loadData(filteredData,countryList);
})