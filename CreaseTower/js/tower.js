function Tower(a){
    var LayerNumber = a;
    var svgSave = document.getElementById('svg2');
    var countNumber = a;    
    var newHTML = null;
    var xset = 0;
    var yset = 0;
    for(countNumber = 0;countNumber<LayerNumber;countNumber++)
    {
         newHTML = newHTML + "<use x=" + (xset + countNumber*87.8)+ " y=" + (yset + countNumber*212) + " xlink:href="+ "#OneLayer" + "></use>"
    }
    svgSave.innerHTML = newHTML;

}



function sizeset(a){
    var sizenumber = a;
    var svg_2 = document.getElementById('svg2');
    svg_2.style.maxWidth = sizenumber*20 + "px";
    svg_2.style.maxHeight = sizenumber*20 + "px";
}


