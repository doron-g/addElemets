counter = 1

function addDiv(scale=10){
    const elm = document.createElement("button");
    elm.classList.add("image");
    elm.classList.add("btn");
    elm.classList.add("btn-primary");


    elm.setAttribute('style', `--scale: ${scale};float: left`);
    elm.setAttribute('data-toggle','popover');
    elm.setAttribute('data-trigger', 'focus');
    elm.setAttribute('title','TITLE');
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
            addDiv(day.deaths);
//            do something with day.date to put it in popover
       }
   }
}
getCoronaDeaths()

$(function () {
  $('[data-toggle="popover"]').popover()
});

$("popover-dismiss").popover(
{
    trigger: "focus"
});

$('#12').popover(
{
    trigger: "hover"
});

