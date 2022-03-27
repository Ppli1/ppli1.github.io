let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/yun-xiong.jpg"){
        myImage.setAttribute('src','images/yun-xiong2.jpg');
    }else{
        myImage.setAttribute('src','images/yun-xiong.jpg')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字：');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla酷毙了，' + myName;
    }
}
myButton.onclick = function(){
    setUserName();
}