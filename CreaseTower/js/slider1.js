$(function () {
    var content = document.getElementsByClassName('content')[0]
    var bar = document.getElementsByClassName('bar')[0]
    var progress = document.getElementsByClassName('progress')[0]
    var dot = document.getElementsByClassName('dot')[0]
    var p1 = document.getElementsByTagName('p')[0]
    var rest = bar.offsetWidth - dot.offsetWidth;
    dot.onmousedown = function (ev) 
   {
        let dotL = dot.offsetLeft
        let e = ev || window.event 
        let mouseX = e.clientX 
        window.onmousemove  = function (ev) {
            let e = ev || window.event
            let moveL = e.clientX - mouseX 
            let newL = dotL + moveL 
            if (newL < 0) {
                newL = 0
            }
            if (newL >= rest) {
                newL = rest
            }
            dot.style.left = newL + 'px'
            if(1)
             {
             let bili = newL/(480/10); 
             p1.innerHTML = "The number of layer (max:10): "+Math.ceil(bili);
             x1.setAttribute("value",Math.ceil(bili));
             progress.style.width = Math.ceil((bili*(480/10)+10)) + 'px';
             Tower();
             } 
            window.onmouseup = function () {
                window.onmousemove = false
                return false
            }
            return false
   };
  
    dot.ontouchstart =function (ev)
   {
        let dotL = dot.offsetLeft
        let e = ev || window.event 
        let mouseX = e.clientX 
        window.ontouchmove  = function (ev) {
            let e = ev || window.event
            let moveL = e.clientX - mouseX 
            let newL = dotL + moveL 
            if (newL < 0) {
                newL = 0
            }
            if (newL >= rest) {
                newL = rest
            }
            dot.style.left = newL + 'px'
            let bili = newL/20; 
           p1.innerHTML = "The number of layer (max:10):  "+Math.ceil(bili);
           x1.setAttribute("value",Math.ceil(bili));
            progress.style.width = Math.ceil((bili*20+10)) + 'px';
            Tower();
  
                return false 
           
            }
            window.ontouchend = function () {
                window.ontouchmove = false
                return false
            }
            return false
   };
  }
}
)