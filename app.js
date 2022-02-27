var form = document.getElementById("myform")



form.addEventListener("submit", function(e) {
    e.preventDefault()
    var search = document.getElementById("buscador").value;
    const marvel = {
        render: () => {
    
            const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=4dc87d334bfb30ba6020551d4adcb3bc&hash=ae66ce15ff0fe20b4d515929c3a5d131`;
            const container = document.querySelector('#marvel-row');
            let contentHTML = '';
        
            fetch(urlAPI)
              .then(res => res.json())
              .then((json) => {
                for (const hero of json.data.results) {
                  let urlHero = hero.urls[0].url;
                  contentHTML += `
                    <div class="col-md-4">
                        <a href="${urlHero}" target="_blank">
                          <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero.name}</h3>
                    </div>`;
                }
                container.innerHTML = contentHTML;
              })
          }
        };
        marvel.render();
    
})

const marvel = {
    render: () => {

        const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=4dc87d334bfb30ba6020551d4adcb3bc&hash=ae66ce15ff0fe20b4d515929c3a5d131`;
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
    
        fetch(urlAPI)
          .then(res => res.json())
          .then((json) => {
            for (const hero of json.data.results) {
              let urlHero = hero.urls[0].url;
              contentHTML += `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>`;
            }
            container.innerHTML = contentHTML;
          })
      }
    };
    marvel.render();
