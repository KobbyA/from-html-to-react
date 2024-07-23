let myValue = 5;//store the value in a JS variable

//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

function updatePValue(newValue){
    //if our element exist, take the parameter we passed in and update the text
    if(pValue){
        pValue.innerText = newValue;
    } else {
        alert("couldn't find the P tag to update");
    }
}

//call the same function, but pass in a parameter this time
//the parameter is the variable we created at the top of this file
//this will run instantly upon page load.
updatePValue(myValue);