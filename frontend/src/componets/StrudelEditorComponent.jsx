// src/componets/StrudelEditorComponet


import React, { useRef, useEffect, useState } from 'react';
import './StrudelEditorCss.css';
function StrudelCodeEditor({
                               initialCode = 'sound("casio")',
                               // height = '100px',
                               // width = '100%',
                               onPlay,
                               onPause,
                               // instructions = true, // Show/hide default instructions
                           }) {
    const replRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const replElement = replRef.current;

        const initializeStrudel = () => {
            if (replElement && replElement.editor) {
                replElement.editor.setCode(initialCode);
            } else {
                setTimeout(initializeStrudel, 100);
            }
        };

        initializeStrudel();
    }, [initialCode]);

    const handlePlay = () => {
        const replElement = replRef.current;
        if (replElement && replElement.editor) {
            replElement.editor.evaluate();
            setIsPlaying(true);
            if (onPlay) onPlay();
        }
    };

    const handlePause = () => {
        const replElement = replRef.current;
        if (replElement && replElement.editor) {
            replElement.editor.stop();
            setIsPlaying(false);
            if (onPause) onPause();
        }
    };

    return (
        <div className="strudel-code-block-container">
            <strudel-editor
                ref={replRef}
                // style={{ width, height }}
            ></strudel-editor>

            <div style={{ margin: '10px 0', display: 'flex', gap: '10px' }}>
                <button onClick={handlePlay} disabled={isPlaying}>Play</button>
                <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
            </div>

        </div>
    );
}

export default StrudelCodeEditor;