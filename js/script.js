const privatekey = '4cb847a59614c16ee2c2e560df7b016ff53cc55e',
      publickey = 'f7db8d7eed27f15b01a955c17bda2512',
      content = document.getElementById('content');

const getConnection = () => {
    const ts = Date.now(),
          hash = MD5(ts + privatekey + publickey),
          URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
          fetch(URL)
                .then(response => response.json())
                .then(response => {
                    response.data.results.forEach(e => {
                        drawHero(e);
                    });
                });

};

const drawHero = e => {
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
    const hero = `
    <div>
        <h3>${e.name}</h3>
        <img src="${image}">
        <p>${e.description}</p>
    </div>
    `;
    content.insertAdjacentHTML('beforeEnd', hero);
};

getConnection();    