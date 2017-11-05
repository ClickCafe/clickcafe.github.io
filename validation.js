function validation(){
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if( name !='' && password !=''){
        alert("You logged in as: " + name);
    }
}