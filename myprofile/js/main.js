let picture = ["images/suji.jpg","images/angry.png","images/hello.png"]
let imgIdx = 0;

    showPicture(); //함수 호출

    function showPicture(){
        let img = document.getElementById("pic");
        img.src = picture[imgIdx];
        imgIdx++;

        if(imgIdx == picture.length){
            imgIdx = 0;
        }
        setTimeout(showPicture,2000); //콜백함수
}