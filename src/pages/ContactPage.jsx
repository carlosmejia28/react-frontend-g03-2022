import React, { useEffect, useState } from 'react';

function ContactPage() {

    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1>Pagina de Contcto</h1>
      <p>Ejemplo de React Hooks de estado</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

  
}export {ContactPage}