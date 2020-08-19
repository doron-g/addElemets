
function addDiv(scale=10){
    const elm = document.createElement("div");
    elm.classList.add("image");
    elm.setAttribute('style', `--scale: ${scale}`);
    document.body.appendChild(elm);
}

async function getCoronaDeaths() {
   const result = await fetch('coronaDeaths.json')
   const mydata = await result.json()
   for (const day of mydata) {
       if (day.deaths > 0) {
            addDiv(day.deaths)
       }
   }
}
getCoronaDeaths()

