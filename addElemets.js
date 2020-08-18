
function changeScale() {
  const scale = 8;
  const elm = document.getElementById('dynamic-scale');
  elm.setAttribute('style', `--scale: ${scale}`)
}





var counter = 0;
function addDiv(){
    const elem = document.createElement("div");
    counter= ++counter
    var elemText = document.createTextNode("i am a new div");
    elem.appendChild(elemText);
    elem.id = "new div" + (counter)
    document.body.appendChild(elem);
}
