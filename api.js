document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Form');
    const countryInput = document.getElementById('nombre');
    const countryInfo = document.getElementById('Info');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const countryName = countryInput.value;

        try {
            const apiUrl = `https://restcountries.com/v3.1/name/${countryName}?lang=es`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }

            const data = await response.json();
            const country = data[0];

            const countryDetails = `
                <p>Nombre: ${country.name.common}</p>
                <p>Capital: ${country.capital}</p>
                <p>Población: ${country.population}</p>
                <p>Región: ${country.region}</p>
            `;

            countryInfo.innerHTML = countryDetails;
        } catch (error) {
            console.error('Error al obtener información del país:', error);
            countryInfo.innerHTML = 'No se pudo obtener la información del país.';
        }
    });
});
