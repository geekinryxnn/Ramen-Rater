const ramens = [
    { 
        id: 1, name: "Shoyu Ramen", 
        restaurant: "Ichiran", 
        image: "Images/gyukotsu.jpg", 
        rating:  "5", 
        comment: "Delicious!" ,
    },

    { 
        id: 2, 
        name: "Miso Ramen", 
        restaurant: "Menya", 
        image: "Images/kojiro (1).jpg", 
        rating: "4" , 
        comment: "Very flavorful!" ,
    },

    { 
        id: 3, 
        name: "Tonkotsu Ramen", 
        restaurant: "Ramen-ya", 
        image: "Images/naruto.jpg", 
        rating:"8", 
        comment: "Very colorful",
    },

    { 
        id: 4 , 
      name:"Naruto Ramen" ,
      restaurant:"Kempiski" , 
      image:"Images/nirvana.jpg" ,
      rating: "7", 
      comment:"Very healthy",
    },
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = '';
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('detail-name').textContent = ramen.name;
    document.getElementById('detail-restaurant').textContent = ramen.restaurant;
    document.getElementById('detail-rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('detail-comment').textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const newRamen = {
            name: document.getElementById('new-name').value,
            restaurant: document.getElementById('new-restaurant').value,
            image: document.getElementById('new-image').value,
            rating: document.getElementById('new-rating').value,
            comment: document.getElementById('new-comment').value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);