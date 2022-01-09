let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

function show()
{
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var foodname = document.getElementById("foodname").value;
  var api = "URL"

  var params = {
    "name": name,
    "email": email,
    "number": number
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
      alert(xhttp.responseText);
    }
  };
  xhttp.open("POST", api, false);
  var a=xhttp.send(JSON.stringify(params));
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("number").value = '';
  document.getElementById("foodname").value = '';

}

window.onload = fadeOut();