fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((raw) => raw.json())
  .then((data) => {
    // console.log(data);

    // console.log(em);

    for (let i = 0; i < 4; i++) {
      const em = data.data[i];
      const card = document.querySelector("#eminemSection");
      card.innerHTML += ` <div id="${em.album.id}" class="card  p-0  col-lg-3   " >
   <img src="${em.album.cover_xl}" class="card-img-top w-100" alt="..." />
   <div class="card-body">
     <h5 class="card-title text-black">"${em.album.title}"</h5>
     <p class="card-text">
       Some quick example text to build on the card title and
       make up the bulk of the card's content.
     </p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>`;
      const button = document.querySelector(".modal-body");
      button.innerHTML += `      
        <div class="col-8"><ul>
        <li>${em.album.title} 
        </li>
        </div> 
         </ul>
          <div class="col-4"> <img class=" mb-3 border-4" id="cover" src="${em.album.cover_xl}" alt="">
          </div>

      `;
    }
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
  .then((raw) => raw.json())
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      const met = data.data[i];

      const card = document.querySelector("#metallicaSection");
      card.innerHTML += ` <div id="${met.album.id}" class="card  p-0  col-lg-3   " >
     <img src="${met.album.cover_xl}" class="card-img-top w-100" alt="..." />
     <div class="card-body">
       <h5 class="card-title text-black">"${met.album.title}"</h5>
       <p class="card-text">
         Some quick example text to build on the card title and
         make up the bulk of the card's content.
       </p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`;
    }
  });
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
  .then((raw) => raw.json())
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      const queen = data.data[i];
      const card = document.querySelector("#queenSection");
      card.innerHTML += ` <div id="${queen.album.id}" class="card   p-0  col-lg-3   " >
     <img src="${queen.album.cover_xl}" class="card-img-top w-100" alt="..." />
     <div class="card-body">
       <h5 class="card-title text-black">"${queen.album.title}"</h5>
       <p class="card-text">
         Some quick example text to build on the card title and
         make up the bulk of the card's content.
       </p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`;
    }
  });
fetch("https://api.deezer.com/album/212377/tracks")
  .then((raw) => raw.json())
  .then((data) => console.log(data));
