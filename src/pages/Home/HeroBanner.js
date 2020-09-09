import React, {useEffect, useState} from 'react';
import TypedText from './TypedText';

function home_padding(el){
    const elHeight = el.clientHeight;
    const { innerHeight: winHeight } = window;
    const padding = (winHeight - elHeight - 200)/2;
    return padding
}
export default function HeroBanner(){
    const [homePadding, setHomePadding] = useState(0)
    const [background, setBackground] = useState()

    useEffect(() => {
        const src = "/images/background-home.jpg"
        const imageLoader = new Image();
        imageLoader.src = src;

        imageLoader.onload = () =>{
           
            setBackground(src)
        }
        console.log("loaded")
    }, [])

    useEffect(() => {
        setHomePadding(home_padding(document.getElementById('st-home-unit')));
        function handleResize() {
            setHomePadding(home_padding(document.getElementById('st-home-unit')));
        }
        return () => window.removeEventListener('resize', handleResize);
    },[])

    return( 
        <section
        style={{
            backgroundImage:`url(${background || "/images/background-home-thumb.jpg"})`
        }}
         className="home" id="home">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="st-home-unit" id="st-home-unit" style={{
                            paddingTop : homePadding ,
                            paddingBottom : homePadding
                        }}>
							<div className="hero-txt">
                                <h2 className="hero-title">We help you to</h2>
								<TypedText/>
							</div>

						</div>
					</div>
				</div>
				<div className="mouse-icon"><div className="wheel"></div></div>
			</div>
		</section>
    );
}