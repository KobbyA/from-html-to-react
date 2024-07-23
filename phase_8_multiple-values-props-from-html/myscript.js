//here we start with the initial value already in the HTML and we will update it when the button clicks with new values

//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//update function now takes data directly from HTML and puts it inside the render which now takes a param
function update(value){
    render(value);
}

//render function now takes a parameter and directly renders it. There is no value being stored in this file at this point
function render(newValue){
    //if our element exist, take the parameter we passed in and update the text
    if(pValue){
        pValue.innerText = newValue;
    } else {
        alert("couldn't find the P tag to update");
    }
}