function saveSVG()
{
var use = document.querySelector('use');
var svg1 = document.getElementById("svg2").innerHTML;
//var svgData = new XMLSerializer().serializeToString(svg1);
console.log(svg1);

var url = use.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
  fetch(url)
    .then(response => response.text())
    .then(svg => {
        var a = document.createElement("a");
        var time=new Date();
        var year=time.getFullYear();
        var month=time.getMonth()+1;
        var day=time.getDate();
        var hour=time.getHours();
        var minute=time.getMinutes();
        var fn=year.toString()+((month<10)?"0":"")+month.toString()+((day<10)?"0":"")+day.toString()+((hour<10)?"0":"")+hour.toString()+((minute<10)?"0":"")+minute.toString();
        a.download = fn + ".svg";
        a.href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
        a.click();
    });


}