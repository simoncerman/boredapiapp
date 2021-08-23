//TODO: Translating feature into app 
function getData(){
    fetch('/data')
    .then(response=>response.json())
    .then(data =>{
        console.log(data);

        let main = document.createElement("h2");
        main.innerText = data.activity;
        let type = document.createElement("p");
        type.innerText = "Type: " + data.type;
        let accessibility = document.createElement("p");
        accessibility.innerText = "accessibility: "+(1-data.accessibility);
        

        document.getElementById('content').appendChild(main);
        document.getElementById('content').appendChild(type);
        document.getElementById('content').appendChild(accessibility);
    })
}