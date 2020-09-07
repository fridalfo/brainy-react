
import React, {useEffect, useState} from 'react'
import "./home.scss"

function home_padding(el){
    const elHeight = el.clientHeight;
    const { innerHeight: winHeight } = window;
    const padding = (winHeight - elHeight - 200)/2;
    return padding
}

export default function HomePage(){

    

    const [homePadding, setHomePadding] = useState(0)

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
        setHomePadding(home_padding(document.getElementById('st-home-unit')));
        setTimeout(()=> erase(typedTextSpan,cursorSpan), newTextDelay + 250);
    }, []);
    useEffect(() => {
        function handleResize() {
            setHomePadding(home_padding(document.getElementById('st-home-unit')));
        }
        return () => window.removeEventListener('resize', handleResize);
    },[])

    return(
    <>
        <section className="home" id="home">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="st-home-unit" id="st-home-unit" style={{
                            paddingTop : homePadding ,
                            paddingBottom : homePadding
                        }}>
							<div className="hero-txt">
                                <h2 className="hero-title">We help you to</h2>
								<div className="hero-caption">
									<div className="node"></div>
									<div className="node"></div>
									<div className="node"></div>
									<div className="node"></div>
									<div className="node"></div>
									<div className="node"></div>
									<span className="typed-text">boost your business.</span><span className="cursor">&nbsp;</span>
								</div>
							</div>

						</div>
					</div>

				</div>
				<div className="mouse-icon"><div className="wheel"></div></div>
			</div>
		</section>
    </>
    )
}