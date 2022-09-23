const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4de220e976mshb4f649582943985p172fb9jsneb503a4cf7f7',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

try {
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then((data) => {return data.json();
    }).then((objectData) => {
        console.log(objectData.countries_stat[0].country_name);
        let tableData="";
        objectData.countries_stat.map((values)=>{
            tableData+=` <tr>
            <td>${values.country_name}</td>
            <td>${values.cases}</td>
            <td>${values.total_recovered}</td>
            <td>${values.deaths}</td>
            <td>${values.active_cases}</td>
            <td>${values.total_cases_per_1m_population}</td>
        </tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    })
}

 catch (error) {
       console.log(error);
      }

       

   

    
 