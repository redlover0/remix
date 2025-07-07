import React, { useRef, useEffect, useState } from 'react';

function StrudelEditorComponent() {
  const replRef = useRef(null);
  const [currentCode, setCurrentCode] = useState('');

  useEffect(() => {
    const replElement = replRef.current;

    if (replElement) {
      // The Strudel REPL web component might take a moment to initialize its internal editor.
      // You might need to wait for it or ensure the .editor property is available.
      // A simple setTimeout or checking in an interval could work, but a custom event
      // from the web component (if it provides one) would be ideal.

      // For demonstration purposes, let's assume it's available after a short delay
      const initializeStrudel = () => {
        if (replElement.editor) {
          console.log('Strudel REPL editor initialized:', replElement.editor);

          // Example: Set initial code
          replElement.editor.setCode(`setcps(1)
n("<0 1 2 3 4>*8").scale('G4 minor')
  .s("gm_lead_6_voice")
  .clip(sine.range(.2,.8).slow(8))
  .jux(rev)
  .room(2)
  .sometimes(add(note("12")))
  .lpf(perlin.range(200,20000).slow(4))
`);

          // You can also listen to changes (though Strudel REPL doesn't expose a direct 'onChange' event for the code via web component attributes/events,
          // you'd typically get the code when a user "submits" it, or you can poll it)

          // For getting the code when needed (e.g., on a button click)
          // You'd typically connect this to your "submit" logic.
          const updateCode = () => {
            if (replElement.editor) {
              setCurrentCode(replElement.editor.getCode());
            }
          };

          // Example: periodically update the state (for demonstration, you'd likely use a button or form submission)
          // const intervalId = setInterval(updateCode, 1000);
          // return () => clearInterval(intervalId); // Cleanup
        } else {
          // Retry initialization if editor is not yet available
          setTimeout(initializeStrudel, 100);
        }
      };

      initializeStrudel();
    }
  }, []); // Run once on component mount

  const handleSubmitCode = () => {
    if (replRef.current && replRef.current.editor) {
      const code = replRef.current.editor.getCode();
      setCurrentCode(code);
      console.log('Code to submit:', code);
      // Here you would send 'code' to your database
      // Example: saveCodeToDatabase(code);
    }
  };

  return (
    <div>
      <h1 className=''>My Strudel REPL</h1>
      {/*
        The 'code' attribute can be used for initial code.
        However, for dynamic updates and to retrieve current code,
        it's better to interact with the web component's API (replRef.current.editor).
      */}
      <strudel-editor ref={replRef} style={{ width: '100%', height: '500px' }}></strudel-editor>
      <button onClick={handleSubmitCode}>Submit Strudel Code</button>
      {currentCode && (
        <div>
          <h2>Current Code (for submission):</h2>
          <pre>{currentCode}</pre>
        </div>
      )}
    </div>
  );
}

export default StrudelEditorComponent;