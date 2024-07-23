//changing the value of myValue to an object calle state. we will update this object in this file when we need to
//all changes to state will always happen in this file even though updates will still be called from the HTML
let state = {
    myValue: 5
};

//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//catch reference to buttons on the page each one will have its own event listener
// that will update the state and then update the screen
const btnUpdateTo8 = document.getElementById('updateTo8');
const btnUpdateTo9 = document.getElementById('updateTo9');
const btnUpdateTo10 = document.getElementById('updateTo10');

//set up event listeners
btnUpdateTo8.addEventListener('click', function(){
    setState({newValue: 8});
})

btnUpdateTo9.addEventListener('click', function(){
    setState({newValue: 9});
})

btnUpdateTo10.addEventListener('click', function(){
    setState({newValue: 10});
})

//update function now takes a parameter we'll call props
//all other functionality is the same except the HTML passes in a value inside the props object to this function
//that is then used to update the screen.
function setState(newState){
    state.myValue = newState.newValue;
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