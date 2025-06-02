/* start navbar */

let saved_btn = $('.navbar .saved button');
let account_btn = $('.navbar .account button');$ 

$('.navbar-light .navbar-toggler').click(() => {
    saved_btn.toggleClass("disabled");
    account_btn.toggleClass("disabled");
})

/* end navbar */

document.addEventListener('DOMContentLoaded', () => {
fetch('data/manga.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("mangaContainer");
    container.innerHTML = ''; // clear container first

    data.forEach(manga => {
      // encode the folder and chapterFile for URL
      const filePath = encodeURIComponent(`${manga.folder}/${manga.chapterFile}`);

      const html = `
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="card">
            <a href="read.html?file=${filePath}">
              <img src="${manga.img}" class="card-img-top" alt="${manga.title}">
            </a>
            <div class="card-body">
              <h5 class="card-title"><a href="read.html?file=${filePath}">${manga.title}</a></h5>
              <p class="card-text">${manga.desc}</p>
              <small>Latest: ${manga.latestVol}</small>
            </div>
          </div>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', html);
    });
  })
  .catch(err => console.error('Failed to load manga data:', err));
    });
fetch('manga-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('mangaContainer');
    data.forEach(manga => {
      const card = document.createElement('div');
      card.className = 'col mb-3';  // let Bootstrap grid handle column sizing
      card.innerHTML = `
        <div class="card h-100">
          <img src="${manga.image}" class="card-img-top" alt="${manga.title}">
          <div class="card-body">
            <h5 class="card-title">${manga.title}</h5>
            <p class="card-text">${manga.description}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Failed to load manga data:', err));

  function loadManga() {
  fetch('manga-data.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('mangaContainer');
      container.innerHTML = '';  // Clear old cards
      data.forEach(manga => {
        const card = document.createElement('div');
        card.className = 'col mb-3';
        card.innerHTML = `
          <div class="card h-100">
            <img src="${manga.image}" class="card-img-top" alt="${manga.title}">
            <div class="card-body">
              <h5 class="card-title">${manga.title}</h5>
              <p class="card-text">${manga.description}</p>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error('Failed to load manga data:', err));
}

// Initial load
loadManga();

// Refresh every 60 seconds (60000 ms)
setInterval(loadManga, 60000);
fetch(`manga-data.json?t=${new Date().getTime()}`)