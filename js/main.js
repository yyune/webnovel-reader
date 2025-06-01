/* start navbar */

let saved_btn = $('.navbar .saved button');
let account_btn = $('.navbar .account button');$ 

$('.navbar-light .navbar-toggler').click(() => {
    saved_btn.toggleClass("disabled");
    account_btn.toggleClass("disabled");
})

/* end navbar */

fetch('data/manga.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("mangaContainer");
    data.forEach(manga => {
      container.innerHTML += `
        <div class="col-lg-2 col-md-3 col-sm-4">
          <div class="card mb-3">
            <a href="details.html?manga=${manga.folder}">
              <img src="${manga.img}" class="card-img-top" alt="${manga.title}">
            </a>
            <div class="over text-center">
              <div class="head text-left">
                <h6>${manga.title}</h6>
              </div>
              <div class="about-list">
                <table class="table table-borderless">
                  <tbody>
                    <tr><th scope="row">Update:</th><td>${manga.latestVol}</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="about text-muted">${manga.desc}</p>
              <a class="reading btn" href="details.html?manga=${manga.folder}">Start Reading</a>
            </div>
          </div>
        </div>
      `;
    });
  });
