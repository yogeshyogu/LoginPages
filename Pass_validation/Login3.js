function validation()
{
let user=document.getElementById('user').value;
let pass=document.getElementById('pass').value;
let cpass=document.getElementById('cpass').value;
let num=document.getElementById('num').value;
let mail=document.getElementById('mail').value;


//Name Validation
if(user=="")
{
document.getElementById('username').innerHTML="please fill the user name";
return false;

}
if((user.length<=2)||(user.length>20))
{
    document.getElementById('username').innerHTML="please enter the character between 3 to 20";
    return false;  
}
if(!isNaN(user))
{
    document.getElementById('username').innerHTML="please enter only character";
    return false; 
}

//Password validation
if(pass=="")
{
    document.getElementById('password').innerHTML="please enter the password";
    return false
}
if((pass.length<=4)||(pass.length>20))
{
    document.getElementById('password').innerHTML="please enter the password between 5 to 20";
    return false;  
}
if(cpass!=pass)
{
    document.getElementById('cpassword').innerHTML="Password is mismatched";
    return false;   
}

//Number validation
if(num=="")
{
    document.getElementById('number').innerHTML="Number can not be empty";
    return false
}
if(isNaN(num))
{
    document.getElementById('number').innerHTML="Please enter only a number";
    return false   
    //This condition is not neccessary because we are taking input type as a number.. 
}

//E-mail validation
if(mail=="")
{
    document.getElementById('email').innerHTML="email can not be empty";
    return false
}


// if(mail.indexOf('@')<=0)
// {
//     document.getElementById('email').innerHTML="@ at invalid position";
//     return false 
//     //This condition is not neccessary because we are taking input type as a email..
// }
}
