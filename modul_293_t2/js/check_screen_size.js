function checkScreenSize() {
    const warningMessage = document.getElementById('screen-size-warning');
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    const about_us = document.getElementById('about-us');
    const services = document.getElementById('services');
    const service_map = document.getElementById('service-map');
    const contact = document.getElementById('contact');
    const modal = document.getElementById('modal');
    const footer = document.getElementById('footer');

    if (window.innerWidth <= 271) {
        warningMessage.style.display = 'block';
        navbar.style.display = 'none';
        header.style.display = 'none';
        about_us.style.display = 'none';
        services.style.display = 'none';
        service_map.style.display = 'none';
        contact.style.display = 'none';
        modal.style.display = 'none';
        footer.style.display = 'none';
    } else {
        warningMessage.style.display = 'none';
        navbar.style.display = 'block';
        header.style.display = 'block';
        about_us.style.display = 'block';
        services.style.display = 'block';
        service_map.style.display = 'block';
        contact.style.display = 'block';
        modal.style.display = 'block';
        footer.style.display = 'block';
    }
}

// Run on load
window.onload = checkScreenSize;
// Run on resize
window.onresize = checkScreenSize;
