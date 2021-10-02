function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

room_name = localStorage.getItem("room_name");
document.getElementById("ihname").innerHTML= room_name; 


  