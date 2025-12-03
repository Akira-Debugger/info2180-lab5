document.addEventListener('DOMContentLoaded', () => {
    let search_btn = document.getElementById('lookup');
    let result_div = document.getElementById('result');

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
});
