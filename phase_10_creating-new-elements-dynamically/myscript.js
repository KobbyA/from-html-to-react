// in this pattern we dynamically create the elements we want complete with the data in them
// and replace them in the dom. So when it's time to render, we clear out what's already there and add a fresh new element
// with the data and attributes we want

//first we get a reference to our root div where we will do everything
const root = document.getElementById('root');

//our render function will now create a new p tag with our proper value and dynamically add it to our root element
function render(value){
    //create a new p tag in Javascript and give it an ID
    const newTag = document.createElement('p');
    newTag.setAttribute('id', 'my-value');

    //add our text to our blank p tag
    newTag.innerText = value;

    //replace whatever is in our root element with our freshly created p tag.
    root.innerHTML = "";
    root.appendChild(newTag);
}

//initially render a p tag that says 5
render(5);

//three seconds later replace the P tag of 5 with another P tag that says 7
setTimeout(function(){
    render(7);
}, 3000);