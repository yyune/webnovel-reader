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
