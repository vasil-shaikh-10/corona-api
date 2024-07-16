const dta = async () => {
  const url = "https://api.api-ninjas.com/v1/covid19?country=canada";
  const options = {
      headers: {
          "x-api-key": "WMaMnELKN7N7qq5JMQKoiQ==aeTYHxYduDRKlzsq",
      },
  };

  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      displayData(data); 
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

const displayData = (data) => {
  const covidDataDiv = document.getElementById('covidData');

  covidDataDiv.innerHTML = '';

  const totalCasesElement = document.createElement('p');
  totalCasesElement.textContent = `Total Cases: ${data.totalCases}`;
  covidDataDiv.appendChild(totalCasesElement);

  const totalDeathsElement = document.createElement('p');
  totalDeathsElement.textContent = `Total Deaths: ${data.totalDeaths}`;
  covidDataDiv.appendChild(totalDeathsElement);

  const totalRecoveredElement = document.createElement('p');
  totalRecoveredElement.textContent = `Total Recovered: ${data.totalRecovered}`;
  covidDataDiv.appendChild(totalRecoveredElement);
};

dta();