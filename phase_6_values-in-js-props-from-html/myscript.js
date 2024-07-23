let myValue = 5;//store the value in a JS variable

//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//update function now takes a parameter we'll call props
//all other functionality is the same except the HTML passes in a value inside the props object to this function
//that is then used to update the screen.
function update(props){
    myValue = props.newValue;
    render();
}

//changed updatePValue to be name render, this naming is important in react
//rendering is the phase where we actually update the screen
//separate from updating where we change the values of our variables.
//a render usually follows an update.
function render(){
    //if our element exist, take the parameter we passed in and update the text
    if(pValue){
        pValue.innerText = myValue;
    } else {
        alert("couldn't find the P tag to update");
    }
}

//remember the HTML is still blank so we need to kick off an initial render to fill it with content
render();