//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//define a function that will update the textin that dom element
//this function will be called automatically after 3 seconds
function updatePValue(){
    if(pValue){
        pValue.innerText = "7";//update the text
    } else {
        alert("couldn't find the P tag to update");
    }
}

//wait 3 seconds then call the function to automatically update the value
setTimeout(updatePValue, 3000);