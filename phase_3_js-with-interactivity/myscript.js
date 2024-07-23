//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//define a function that will update the text in that dom element
//this function will be called via onclick attribute in the HTML
function updatePValue(){
    if(pValue){
        pValue.innerText = "7";//update the text
    } else {
        alert("couldn't find the P tag to update");
    }
}