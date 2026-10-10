users = [
    {
        "name":"Harry",
        "gender":"male",
        "img":"imgs/Harry.jpg"
    },
    {
        "name":"Misae",
        "gender":"female",
        "img":"imgs/Misae.jpg"
    }
]
var id = 0;
function toggle(){
    if(id == 0){
        id=1;
    }else{
        id = 0;
    }
    document.getElementById("name").innerHTML = users[id].name;
    document.getElementById("img").src = users[id].img;
    document.getElementById("gender").innerHTML = users[id].gender;
}

function random(){
    fetch("https://randomuser.me/api")
        .then(function(rawData){
            return rawData.json();
        }).then(function(jsonData){
            var user = jsonData.results[0];
            var name = user.name.title+" "+user.name.first+" "+user.name.last;
            var gender = user.gender;
            var img = user.picture.large;
            document.getElementById("name").innerHTML = name;
            document.getElementById("img").src = img;
            document.getElementById("gender").innerHTML =gender;
        })
}