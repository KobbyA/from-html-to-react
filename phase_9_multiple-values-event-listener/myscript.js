//we create a custom event name. Whenever we click a button, trigger this event in window listening vor the value
//we use the value from the event listener to render the updates to the screen
const eventName = "valueUpdated";
//get a reference to the dom element containing the text
const pValue = document.getElementById('my-value');

//update function now dispatches our custom event with the value from the button
function update(value){
    dispatchEvent( new CustomEvent(eventName, {detail: {value}}) )
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

//we define an event listener for our custom event. This will now do the work of receiving the event and updating the screen
window.addEventListener(eventName, evt => {
    const newValue = evt.detail.value;
    render(newValue);
});
