//TODO: Translating feature into app 
function getData(){
    fetch('/data')
    .then(response=>response.json())
    .then(data =>{
        for (let y = 0; y < data.length; y++) {
            const element = data[y];
            let box = document.createElement("div");
            box.classList.add('box');
            let h3 = document.createElement("h3");
            h3.innerText = element.activity;
            box.appendChild(h3);
            document.getElementById('content').appendChild(box);
        }

    })
}
function choseOne(){
    let isChosed = false;
    let boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        const element = boxes[i];
        if(element.style.backgroundColor == "red"){
            isChosed = true;
        }
    }
    if(isChosed==false){
        let boxList = document.getElementsByClassName("box");
        let randomNumber = Math.floor(Math.random()*boxList.length);
        boxList[randomNumber].style.backgroundColor = "red";
    }
}
function reloadData(){
    document.getElementById('content').innerHTML = '';
    getData();
}