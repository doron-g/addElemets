counter = 1



function addDiv(scale=10, title){
    const elm = document.createElement("button");
    elm.classList.add("image");
    elm.classList.add("btn");
    elm.classList.add("btn-primary");
    elm.setAttribute('style', `--scale: ${scale};float: left`);
    elm.setAttribute('data-toggle','popover');
    elm.setAttribute('data-trigger', 'focus');
    elm.setAttribute('title', title);
    elm.setAttribute('data-content','SOME DATA');
    elm.setAttribute('data-placement','left');
    elm.setAttribute('type','button');
    elm.setAttribute('id',++counter);
    document.body.appendChild(elm);
}

async function getCoronaDeaths() {
   const result = await fetch('coronaDeaths.json')
   const mydata = await result.json()
   for (const day of mydata) {
       if (day.deaths > 0) {
            addDiv(day.deaths, day.date);

       }
   }
   $('[data-toggle="popover"]').popover()
}
getCoronaDeaths()


