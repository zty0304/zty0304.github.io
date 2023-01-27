function drawAgain(){

//redraw
var xyset1 = [[0,21.2],[8.78,12.42],[21.2,12.42],[21.2,0],[31.2,4.14],[31.2,8.28],[34.12,11.2],[38.26,11.2],[41.18,8.28],[51.18,12.42],[42.4,21.2],[29.98,21.2],[29.98,33.62],[19.98,29.48],[19.98,25.34],[17.06,22.42],[12.92,22.42],[10,25.34],[0,21.2]];
var pathstroke_1 = document.getElementById('pathstroke');
var pathlink_1 = document.getElementById('pathlink');
var layerCount = document.getElementById('myRange');
var pathd = "M"+xyset1[0][0]+","+xyset1[0][1]+" ";
var pathl = "M"+xyset1[1][0]+","+xyset1[1][1]+" L"+xyset1[16][0]+","+xyset1[16][1]+" ";


console.log(layerCount.value);
var layer_2 = layerCount.value;

for(var layer_1 = 0; layer_1<layer_2; layer_1++){

    var pathd = pathd + "M"+(xyset1[0][0]+(8.78*layer_1))+","+(xyset1[0][1]+(21.2*layer_1))+" ";

    for(var partCount = 0; partCount<4; partCount++){

        if(partCount !=0){
            pathd =pathd + "M"+(xyset1[0][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[0][1]+(21.2*layer_1))+" ";
        }
        
        pathl = pathl + "M"+(xyset1[1][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[1][1]+(21.2*layer_1))+" L"+(xyset1[16][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[16][1]+(21.2*layer_1))+" " + "M"+(xyset1[2][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[2][1]+(21.2*layer_1))+" L"+(xyset1[15][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[15][1]+(21.2*layer_1))+" " + "M"+(xyset1[2][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[2][1]+(21.2*layer_1))+" L"+(xyset1[11][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[11][1]+(21.2*layer_1))+" " + "M"+(xyset1[2][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[2][1]+(21.2*layer_1))+" L"+(xyset1[5][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[5][1]+(21.2*layer_1))+" " + "M"+(xyset1[6][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[6][1]+(21.2*layer_1))+" L"+(xyset1[11][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[11][1]+(21.2*layer_1))+" " + "M"+(xyset1[7][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[7][1]+(21.2*layer_1))+" L"+(xyset1[10][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[10][1]+(21.2*layer_1))+" " + "M"+(xyset1[11][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[11][1]+(21.2*layer_1))+" L"+(xyset1[14][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[14][1]+(21.2*layer_1))+" ";
    
        for(var linkCount = 1;linkCount<19; linkCount++){
            //console.log(xyset1[linkCount][1]);
            pathd = pathd + "L"+(xyset1[linkCount][0]+(42.4*partCount)+(8.78*layer_1))+","+(xyset1[linkCount][1]+(21.2*layer_1))+" ";
        }
    }


}

//console.log(pathd);
//console.log(pathl);
pathstroke_1.setAttribute('d',pathd);
pathlink_1.setAttribute('d',pathl);


//download
    
var svg = document.getElementById("svg3"); //获取SVG元素
var svgData = new XMLSerializer().serializeToString(svg); //将SVG元素序列化为字符串
var blob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"}); //创建Blob对象
saveAs(blob, "image.svg"); //使用FileSaver.js的saveAs()方法保存文件



}