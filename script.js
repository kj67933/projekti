document.addEventListener("DOMContentLoaded", function() {

    const phones = [
        { name: "iPhone 11", specs: "iPhone 11", image: "iphone11.jpg" },
        { name: "Samsung Galaxy S20", specs: "Galaxy S20", image: "galaxys20.jpg" },
        { name: "iPhone X", specs: "iPhone X", image: "iphonex.jpg" },
        { name: "Samsung", specs: " Samsung a54", image: "samsung.jpg" },
        
    ];

    
    const mainContent = document.getElementById("main-content");
    phones.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.className = "phone-card";
        phoneCard.innerHTML = `<h2>${phone.name}</h2><p>${phone.specs}</p>`;
        mainContent.appendChild(phoneCard);
    });

   
    const slider = document.createElement("div");
    slider.className = "slider";

    const slideWrapper = document.createElement("div");
    slideWrapper.className = "slide-wrapper";

   
    phones.forEach(phone => {
        const slide = document.createElement("img");
        slide.src = phone.image;
        slide.alt = phone.name;
        slide.style.width = "30%";
        slideWrapper.appendChild(slide);
    });

    slider.appendChild(slideWrapper);
    mainContent.insertBefore(slider, mainContent.firstChild);

    
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % phones.length;
        slideWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);// ndrro sliden 3sekonda
});
