// async function fun() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')

//         const data = await response.json()
//         data.map((value,index)=>{
//             console.log(value.price)
//         })

//     } catch (error) {
//         console.log("Error", error)
//     }
// }
// fun()

document.getElementById("details").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const usermail = document.getElementById("usermail").value.trim();
    const userpassword = document.getElementById("userpassword").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const error = document.querySelectorAll(".error")
    fun(username,usermail,userpassword,confirm,error);
});
function fun(username,usermail,userpassword,confirm, error){
 

    let valid = true
 
    const nameRegex=/^[a-zA-Z0-9_]{3,}$/
    if(username===""){  
        // alert("Enter Name")
        error[0].textContent = "Enter the Name"
        valid = false
        return;
    }
    else if(!nameRegex.test(username))
    {
        // alert("Name must have min 3 Characters")
        error[0].textContent = "Name must have min 3 Characters"
        valid = false
        return;
    }
    else{
        error[0].textContent = ""
        
    }
   


    const mailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(usermail===""){
        // alert("Enter Mail")
        error[1].textContent = "Enter the Mail"
        valid = false
        return;
    }
    else if(!mailRegex.test(usermail))
    {
        // alert("Enter Correct Format of Mail")
        error[1].textContent = "Enter Correct Format of Mail"
        valid = false
        return;
    }
    else{
        error[1].textContent = ""
        
    }

   
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (userpassword === "") {
        // alert("Enter password");
        error[2].textContent = "Enter password"
        valid = false
        return;
    } else if (!passwordRegex.test(userpassword)) {
        // alert("Enter Correct Format of Password");
        error[2].textContent = "Enter Correct Format of Password"
        valid = false
        return;
    }
    else{
        error[2].textContent = ""
        
    }

   
    if (confirm === "") {
        // alert("Re-Enter password to confirm");
        error[3].textContent = "Re-Enter password to confirm"
        valid = false
        return;
    } else if (userpassword !== confirm) {
        // alert("Passwords do not match");
        error[3].textContent = "Passwords do not match"
        valid = false
        return;
    }
        else{
        error[3].textContent = ""
        
    }
    
    if(valid){
        
     alert("Account Created Successfully");
    }else{
    
    alert("Account failed");
    }
}
