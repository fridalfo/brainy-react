import React from 'react';
import ReactWOW from 'react-wow';

export default function OurClient(){
    const clientList = [
        "ip","maritim","wikabeton","pupr"
    ]
    return(
        <div className="our-client" >
			<div className="card">
				<div className="isian">
					<h1 className="title">our big client.</h1>
					<div className="row client-list flex-row">
                        {
                            clientList.map((x,i)=>
                                <ReactWOW key={i} animation="bounceInUp" delay={(0.05*i).toString()+"s"}>
                                    <div className="col-xs-3 col-md-3" ><img src={"photos/client-"+x+".png"} className="img-responsive" alt=""/></div>
                                </ReactWOW>
                            )
                        }
					</div>
				</div>
			</div>
		</div>
    );
}