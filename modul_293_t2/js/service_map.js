fetch('/modul_293_t2/json/service_map.json')
    .then(response => response.json())
    .then(services => {
        const serviceMap = document.getElementById('service-map');
        serviceMap.innerHTML = '<h2 class="section-title" style="margin-top: 200px">Service Map</h2>'; // Reset and add title

        services.forEach((service, index) => {
            // Create a container for each service
            const container = document.createElement('div');
            container.classList.add('service-map-container');
            if (index >= 3) {
                container.classList.add('hidden'); // Hide services after the first 3
            }

            // Add the service title
            const title = document.createElement('div');
            title.classList.add('service-map-left-title');
            title.textContent = service.title;

            // Add the service description
            const description = document.createElement('div');
            description.classList.add('service-map-description');
            const ul = document.createElement('ul');
            service.description.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            description.appendChild(ul);

            // Append title and description to container
            container.appendChild(title);
            container.appendChild(description);

            // Append the container to the service map
            serviceMap.appendChild(container);
        });

        // Add Show More and Show Less buttons
        const showMoreButton = document.createElement('button');
        showMoreButton.id = 'show-more';
        showMoreButton.textContent = 'Show More';
        serviceMap.appendChild(showMoreButton);

        const showLessButton = document.createElement('button');
        showLessButton.id = 'show-less';
        showLessButton.textContent = 'Show Less';
        showLessButton.style.display = 'none';
        serviceMap.appendChild(showLessButton);

        // Add event listeners
        initializeShowMoreShowLess();
    })
    .catch(error => console.error('Error loading services:', error));


function initializeShowMoreShowLess() {
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');

    showMoreButton.addEventListener('click', function () {
        const hiddenServices = document.querySelectorAll('.service-map-container.hidden');
        for (let i = 0; i < 3 && hiddenServices[i]; i++) {
            hiddenServices[i].classList.remove('hidden');
        }

        if (document.querySelectorAll('.service-map-container.hidden').length === 0) {
            showMoreButton.style.display = 'none';
            showLessButton.style.display = 'inline-block';
        }
    });

    showLessButton.addEventListener('click', function () {
        const allServices = document.querySelectorAll('.service-map-container');
        for (let i = 3; i < allServices.length; i++) {
            allServices[i].classList.add('hidden');
        }
        showMoreButton.style.display = 'inline-block';
        showLessButton.style.display = 'none';
        window.scrollBy(0, -1000);
    });
}
