$(function () {
      //获取外包裹元素
  var eBarWrap = document.getElementById('wrap');
  //获取滑动条
  var eBarCon = eBarWrap.getElementsByClassName('bar_container')[0];
  //获取滑动痕迹元素
  var eBarInto = eBarWrap.getElementsByClassName('bar_into')[0];
  //获取滑块
  var eBarDrag = eBarWrap.getElementsByClassName('bar_drag')[0];
  //获取文本元素
  var eBarText = eBarWrap.getElementsByClassName('bar_text')[0];
  //获取最大位置
  var nMax = eBarCon.offsetWidth - eBarDrag.offsetWidth;
  //滑块添加拖拽事件
  eBarDrag.addEventListener('mousedown',function(event){
    
  });
  //滑块添加拖拽事件
  eBarDrag.addEventListener('mousedown',function(event){
    
  });
      //初始化鼠标开始拖拽的点击位置
      var nInitX = event.clientX;
      //初始化滑块位置
      var nInitLeft = this.offsetLeft;
  	//页面绑定鼠标移动事件
      document.onmousemove = event=>{
        //鼠标移动时取消默认行为，避免选中其他元素或文字
        event.preventDefault();
        //获取鼠标移动后滑块应该移动到的位置
        let nX = event.clientX - nInitX + nInitLeft;
        //限制滑块最大移动位置
        if(nX>=nMax){
          nX = nMax;
        }
        //限制滑块最小移动位置
        if(nX<=0){
          nX = 0;
        }
        //修改滑块位置（因为用的是箭头函数，所以this还是指向滑块）
        this.style.left = nX + 'px';
        //修改滑动痕迹宽度
        eBarInto.style.width = nX + this.offsetWidth/2 + 'px';
        //修改文本数值
        eBarText.innerHTML = Math.ceil(nX/nMax*100)/10;
      };
	//鼠标松开绑定事件，取消页面上所有事件
    document.onmouseup = function(event){
        document.onmousemove = null;
        document.onmouseup = null;
      }
  //修改默认数值
  eBarText.innerHTML = 0;
      //滑动条添加点击事件
  eBarCon.addEventListener('click',function(event){
    //设置滑动条位置
    var nLeft = this.offsetLeft;
    //获取有定位的父元素
    var eParent = this.offsetParent;
    //循环所有有定位的父元素
    while(eParent){
      //添加定位父元素offsetLeft值，用于准确定位滑动条与页面左侧的距离 
      nLeft += eParent.offsetLeft;
      //再次获取父元素外的定位父元素
      eParent = eParent.offsetParent;
    }
    //计算滑块位置
    var nX = event.clientX - nLeft;
    //修改滑块位置
    eBarDrag.style.left = nX +'px';
    //修改滑动痕迹宽度
    eBarInto.style.width = nX + eBarDrag.offsetWidth/2 + 'px';
    //修改文本数值
    eBarText.innerHTML = Math.ceil(nX/nMax*100)/10
  });
})