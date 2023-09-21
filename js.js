const id= (id)=> document.getElementById(id);
const classes= (classes)=> document.getElementsByClassName(classes)



let  userName = id("userName");
let  Email = id("Email");
let  Password =id("Password");
let form = id("form")
let errorMsg = classes("error");
let successIcon= classes("success-icon");
let failureIcon= classes("failure-icon");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    errorMsg[2].innerHTML="ladfj";
    engine(userName,0,"username can't be blank");
    engine(Email,1,"Email can't be blank");
    engine(Password,2,"Password can't be blank");
})

const engine = (id,index,message)=>{

    if(id.value.trim()=== ""){
        errorMsg[index].innerHTML=message;
        failureIcon[index].style.opacity=1;
        successIcon[index].style.opacity=0;
    }else{
        errorMsg[index].innerHTML="";
        failureIcon[index].style.opacity=0;
        successIcon[index].style.opacity=1;
    }
}