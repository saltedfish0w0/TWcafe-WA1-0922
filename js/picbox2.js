var index=0;
        var imgs = document.getElementsByClassName("pb2_img");
        var dots = document.getElementsByClassName("pb2-sides")[0];
        var dotss = dots.children;   
        var len = imgs.length;  
        var timer = null; 

        dotss[0].className="active_pb2";

        //change image
        function ChangeImg() {
            index++;
            if(index>=len) index=0;
         
            for(var i=0; i<len; i++){
                imgs[i].style.display='none';
                dotss[i].className = "quiet_pb2";
            }         
            imgs[index].style.display='block';      
            dotss[index].className = "active_pb2";
        }

        for(var i=0; i<len; i++){
            dotss[i].index = i;
            dotss[i].onmouseover = function(){
                for(var j=0; j<len; j++){
                    imgs[j].style.display='none';
                    dotss[j].className = "quiet_pb2";
                }
                this.className = "active_pb2";
                index = this.index;
                imgs[index].style.display='block';
            }
        }
        // move the mouse to the picbox2, pause to switch pictures
        picbox2.onmouseover = function(){
            clearInterval(timer);
        }
        //mouse out of the picbox2 will start switching pictures
        picbox2.onmouseout = function(){
            timer = setInterval(ChangeImg,2000);//timer to switch a picture every 2 seconds
        }