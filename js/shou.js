
// 第二个导航栏

var lis = document.querySelectorAll('.fater>li')
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        // 
            if (lis[i].className == "mi-xia xia") {
                // lis[i].children[1].style.display = "display";
                for (let j = 0; j < lis.length; j++) {
                    lis[j].className = "mi-xia xia"
                }
                lis[i].className = "mi-xia";
                console.log(lis[i].children[1].childNodes);
                
                // display: diplay
            } else {
                lis[i].className = "mi-xia xia"
            }
            
        }
        
    }
// }     
