// Define the custom element class
class MyElement extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM for encapsulation
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a text element in the shadow DOM
        const text = document.createElement('p');
        text.textContent = 'Hello, World!';

       // Create a button element
       const button = document.createElement('button');
       button.textContent = 'Click Me';

       // Add a click event listener to the button
       button.addEventListener('click', () => {
           alert('Button Clicked!');
       });

       // Append the text and button elements to the shadow DOM
       shadow.appendChild(text);
       shadow.appendChild(button);
    }
}

// Register the custom element with the browser
customElements.define('my-element', MyElement);
