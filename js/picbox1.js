window.onload = function () {
    var bottom = $('bottom'),title = $('title'),
    img = $('img'),left = $('left'),right = $('right');
    var aSpan = bottom.getElementsByTagName('span');
    var aDiv = bottom.getElementsByTagName('div');
    var arr = ['01','02','03', '04'];
    var num = 0;
    picTab();
    // click next
    right.onclick = function () {
    if (num === aDiv.length - 1) num = -1;
    num++;
    picTab();
    }
    // click back
    left.onclick = function () {
    if (num === 0) num = aDiv.length;
    num--;
    picTab();
    }
   
    function picTab() {
    title.innerHTML = arr[num];
    img.src = './img/img' + (num + 1) + '.png';
    for ( var i = 0; i < aSpan.length; i++ ) {
     aSpan[i].className = '';
    }
    aSpan[num].className = 'active';
    }
    // mouse
    for ( var i = 0; i < aSpan.length; i++ ) {
    aSpan[i].index = i;
    aSpan[i].onmouseover = function () {
     aDiv[this.index].style.display = 'block';
    }
    aSpan[i].onmouseout = function () {
     aDiv[this.index].style.display = 'none';
    }
    aSpan[i].onclick = function () {
     num = this.index;
     picTab();
    }
    }
    function $(id) { return document.getElementById(id);}
}

