

const lis = document.querySelectorAll('#boor>li');

for (let i =0; i < lis.length; i ++) {

    lis[i].onclick = function () {
        console.log(lis[i]);
        
        for (let o =0; o < lis.length; o ++) {
            lis[o].style.borderBottom = '';
        }
        this.style.borderBottom = '3px solid #00aeff';
    }
}