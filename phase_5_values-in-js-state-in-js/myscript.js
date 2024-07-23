//changing the value of myValue to an object calle state. we will update this object in this file when we need to
//all changes to state will always happen in this file even though updates will still be called from the HTML
let state = {
    myValue: 5
};

//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//introducing an update function
//this will update the state object's myValue property
//when it's done, it will automatically call render to update the screen
//this function will be called from a button onclick in the HTML
function update(){
    state.myValue = 7;
    render();
}

//changed updatePValue to be name render, this naming is important in react
//rendering is the phase where we actually update the screen
//separate from updating where we change the values of our variables.
//a render usually follows an update.
function render(){
    //if our element exist, take the parameter we passed in and update the text
    if(pValue){
        pValue.innerText = state.myValue;
    } else {
        alert("couldn't find the P tag to update");
    }
}

//remember the HTML is still blank so we need to kick off an initial render to fill it with content
render();