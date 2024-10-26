// Load the Navbar for the website
fetch('/modul_293_t2/components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data
        hideNav();
    });

// Load the Header for the website
fetch('/modul_293_t2/sections/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Load the Modal for the website
fetch('/modul_293_t2/components/modal.html')
    .then(response => response.text())
    .then(data => document.getElementById('modal').innerHTML = data);

// Load the About Container for the website
fetch('/modul_293_t2/sections/about_us.html')
    .then(response => response.text())
    .then(data => document.getElementById('about-us').innerHTML = data);

// Load the Contact Container for the website
fetch('/modul_293_t2/sections/contact.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact').innerHTML = data
        attachEventListeners();
    });

// Load the Footer for the website
fetch('/modul_293_t2/sections/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Load the Screen Size Warning for the website
fetch('/modul_293_t2/components/screen_size_warning.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('screen-size-warning').innerHTML = data
        checkScreenSize();
    });

// Load the map
fetch('/modul_293_t2/components/map.html')
    .then(response => response.text())
    .then(data => document.getElementById('map').innerHTML = data);