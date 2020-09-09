import React, {useEffect} from 'react'



export default function TypedText(){
    useEffect(() => {
        const textArray = ["boost your business.", "build your brand.",  "create your website.", "simplify your work."];
        const typingDelay = 100;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 20;

        function type(typedTextSpan,cursorSpan) {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(()=>type(typedTextSpan,cursorSpan), typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(()=>erase(typedTextSpan,cursorSpan), newTextDelay);
        }
        }

        function erase(typedTextSpan,cursorSpan) {
            if (charIndex > 0) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(()=>erase(typedTextSpan,cursorSpan), erasingDelay);
            } 
            else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if(textArrayIndex>=textArray.length) textArrayIndex=0;
                setTimeout(()=>type(typedTextSpan,cursorSpan), typingDelay + 1100);
            }
        }
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");
      
        setTimeout(()=> erase(typedTextSpan,cursorSpan), newTextDelay + 250);
    }, []);

    return(
        <div className="hero-caption">
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <span className="typed-text">boost your business.</span><span className="cursor">&nbsp;</span>
        </div>
    );
}