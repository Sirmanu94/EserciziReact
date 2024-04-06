import { useState } from "react";

function Container({ title, children }) {                 //Children è un props che imposta automaticamente all'interno del componentnte a cui è passato 
  const [collapse, setCollapse] = useState(false);  

  function handleShow() {
    setCollapse((c) => !c);
  }

  return (
    <div className="container">      
      <div className="title">
        {title}
        <button onClick={handleShow}>Show More</button>
      </div>
      {collapse && <div className="children"> {children}</div>}
    </div>
  );
}

export default Container;


// All'intenro del container noi possiamo inserire anche altri div, e possiamo rendere il contenuto dinamico utilizzando uno state.
// Per esempio al cambiamento dello state possiamo decidere che un determinato div possa essere visibile o meno
//In questo caso abbiamo impostato che al click del bottone verrà chiamata la funzione handleShow che modificherà lo state, automaticamente collapse 
// non essendo piu verò, tramite il conditional rendering, noo mostrerà il div children