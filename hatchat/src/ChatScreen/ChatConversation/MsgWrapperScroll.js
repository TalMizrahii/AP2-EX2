import { useEffect, useRef } from 'react';

function MsgWrapperScroll({ children }) {
    const chatBoxRef = useRef(null);

    useEffect(() => {
        const chatBox = chatBoxRef.current;

        // Scroll to the bottom of the chat box initially
        chatBox.scrollTop = chatBox.scrollHeight;

        // Scroll to the bottom of the chat box on new messages
        const observer = new MutationObserver(() => {
            chatBox.scrollTop = chatBox.scrollHeight;
        });
        observer.observe(chatBox, { childList: true });

        // Clean up the observer when component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="DivWithScroll" ref={chatBoxRef}>
            <div id="chatBoxOfMessages">
                {children}
            </div>
        </div>
    );
}

export default MsgWrapperScroll;
