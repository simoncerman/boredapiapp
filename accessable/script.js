//TODO: Translating feature into app 
function getData(){
    fetch('/data')
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        for (let y = 0; y < data.length; y++) {
            const element = data[y];
            let box = document.createElement("div");
            box.classList.add('box');
            let h3 = document.createElement("h3");
            h3.innerText = element.activity;
            box.appendChild(h3);
            document.getElementById('content').appendChild(box);          }

    })
}