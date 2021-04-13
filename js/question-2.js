
 const url = "https://api.rawg.io/api/games?key=ebe46821b76340e69294fdc37a2e2345&dates=2019-09-01,2019-09-30&platforms=18,1,7";


const container = document.querySelector(".container");

async function getUrl() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;
     

       container.innerHTML = "";

        for (let i = 0; i < facts.length; i++){
        
            if (i === 8) {
                break;
            }

            container.innerHTML +=
                `<div class="game">
                    <h2>${facts[i].name}</h2>
                    <p>Rating: ${facts[i].rating}</p> 
                    <p>Amount of tags: ${facts[i].tags.length}</p>
               </div> `;
         }
    } catch (error) {
        container.innerHTML = `<div class="error">Ops....something went wrong... try again      later</div>` ;
    }
    

}

getUrl();