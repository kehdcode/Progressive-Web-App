//Function to create Element
function createNode(element) {
    return document.createElement(element);
}

//Function to append the element to its parent
function append(parent, el){
    return parent.appendChild(el); 
}

const ul = document.getElementById('people');

//Fetching data from an api
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;
        return people.map(function(person){
            let li = createNode('li')
            span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);
        });
    })
