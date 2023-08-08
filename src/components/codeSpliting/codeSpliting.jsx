import React from "react";

const CodeSpliting = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      CodeSpliting
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && (
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga incidunt earum sapiente
          cumque velit libero maiores dolorem rem suscipit ea! Quia dolorem eaque magni ipsam,
          soluta enim hic temporibus nemo.
        </div>
      )}
    </div>
  );
};

export default CodeSpliting;
