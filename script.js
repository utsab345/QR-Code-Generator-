let getBtn = document.querySelector("button");
let qrText = document.querySelector("#qrText");
let qrImg = document.querySelector("#qrImg");
let imgBox =document.querySelector(".imgBox");


function getQr(){
    if(qrText.value.length >0){
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add("showImg");

    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}
getBtn.addEventListener("click",getQr);