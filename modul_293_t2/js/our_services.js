fetch('/modul_293_t2/json/our_services.json')
    .then(response => response.json())
    .then(services => {
        const servicesContainer = document.getElementById('services');
        servicesContainer.innerHTML = '<h2 class="section-title" style="margin-top: 200px; margin-bottom: 90px">Our Services</h2>'; // Reset and add title

        services.forEach(service => {
            const bubble = document.createElement('div');
            bubble.classList.add(service.bubbleClass);

            const servicesText = document.createElement('div');
            servicesText.classList.add('services-text');

            const h1 = document.createElement('h1');
            h1.textContent = service.title;

            const description = document.createElement('div');
            description.classList.add('description-services');
            description.textContent = service.description;

            servicesText.appendChild(h1);
            servicesText.appendChild(description);

            const img = document.createElement('img');
            img.src = service.image;
            img.alt = "A Vector Graphic";
            img.loading = "lazy";

            if (service.isFpImage) {
                img.classList.add('fp-image');
            }

            // If there's an image style (like the transform for cybersecurity), apply it
            if (service.imageStyle) {
                img.style.cssText = service.imageStyle;
            }

            // Append the elements based on the bubble class
            if (service.bubbleClass === 'bubble-blue-services') {
                // For blue bubble, image comes first (left), then text
                bubble.appendChild(img);
                bubble.appendChild(servicesText);
            } else {
                // For pink bubble, text comes first (left), then image
                bubble.appendChild(servicesText);
                bubble.appendChild(img);
            }

            servicesContainer.appendChild(bubble);
        });
    })
    .catch(error => console.error('Error loading services:', error));

