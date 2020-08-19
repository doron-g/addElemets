counter = 1


function addDiv(scale=10, title, accumulative){
    const elm = document.createElement("button");
    elm.classList.add("image");
    elm.classList.add("btn");
    elm.classList.add("btn-primary");
    elm.setAttribute('style', `--scale: ${scale}`);
    elm.setAttribute('data-toggle','popover');
    elm.setAttribute('data-trigger', 'focus');
    elm.setAttribute('title', title);
    elm.setAttribute('data-content','מתים מקורונה היום: ' + scale + " עד היום נפטרו: " + accumulative);
    elm.setAttribute('data-placement','down');
    elm.setAttribute('type','button');
    elm.setAttribute('id',++counter);
    document.body.appendChild(elm);
}

async function getCoronaDeaths() {
   const result = await fetch('coronaDeaths1.json')
   const mydata = await result.json()
   for (const day of mydata) {
       if (day.deaths > 0) {
            addDiv(day.deaths, day.date, day.accumulative);

       }
   }
   $('[data-toggle="popover"]').popover()
}
getCoronaDeaths()

