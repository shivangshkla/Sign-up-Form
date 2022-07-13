const p1 = document.getElementById("password");
const p2 = document.getElementById("confirm");
const message = document.querySelector(".message");
function checkPassword(){
    if(p1.value == "" && p2.value == ""){
        p1.classList.remove("matched");
        p2.classList.remove("matched");
        p1.classList.add("wrong");
        p2.classList.add("wrong");
        message.innerHTML = "*Password cannot be empty";
    }
    else if(p1.value == p2.value){
        p1.classList.remove("wrong");
        p2.classList.remove("wrong");
        p1.classList.add("matched");
        p2.classList.add("matched");
        message.innerHTML = "";
    }
    else{
        p1.classList.remove("matched");
        p2.classList.remove("matched");
        p1.classList.add("wrong");
        p2.classList.add("wrong");
        message.innerHTML = "*Password do not match";
    }
}