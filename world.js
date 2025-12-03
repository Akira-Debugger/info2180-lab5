document.addEventListener('DOMContentLoaded', () => {
    let search_btn = document.getElementById('lookup');
    let result_div = document.getElementById('result');
    let search_city_btn = document.getElementById('lookup_city');

    search_btn.addEventListener('click', (e) => {
        e.preventDefault();

        let country_name = document.getElementById('country').value.trim();
        let country_name_url = country_name? `world.php?country=${encodeURIComponent(country_name)}` : 'world.php';
        fetch(country_name_url)
            .then(response => response.text())
            .then(country_data => {
                result_div.innerHTML = country_data; 
            })
            .catch(() => {
                alert('Problem in getting country data');
            });
    });

    search_city_btn.addEventListener('click', (e) => {
        e.preventDefault();
        let country_name = document.getElementById('country').value.trim();
        let city_name_url = country_name? `world.php?country=${encodeURIComponent(country_name)}&lookup=cities` : 'world.php?lookup=cities';
        fetch(city_name_url)
            .then(response => response.text())
            .then(city_data => {
                result_div.innerHTML = city_data; 
            })
            .catch(() => {
                alert('Problem in getting city data');
            });
    });

});
