import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore }) {
    return ( 
        <div className='container mb-5'>
            <div className='row'> 
                <div className='col-7 mx-5'> 
                    <img src={imageURL} style={{paddingLeft:"120px"}}/>
                </div>
                <div className='col-3 mt-5'>
                    <h1>{productName}</h1>
                    <br></br>
                    <p className="text-muted" style={{fontSize:"17px"}}>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"80px"}}> Learn More →</a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}><img src="media/images/google-play-badge.svg" className=''/></a>
                    <a href={appStore} style={{marginLeft:"20px"}}><img src="media/images/appstore-badge.svg"/></a>
                    </div>                    
                </div>
                <div className='col-2'></div>
            </div>
        </div>
     );
}

export default LeftSection;