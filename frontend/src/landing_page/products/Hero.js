import React from 'react';

function Hero() {
    return ( 
        <div className='container  border-bottom mb-5'>
            <div className='row text-center text-muted mt-5 mb-5 p-5'>
                <h1 style={{fontSize:"47px"}}>Zerodha Products</h1>
                <p className='fs-5 mt-2'>Sleek, modern, and intuitive trading platforms</p>
                <p className=''>Check out our 
                    <a href='' style={{textDecoration:"none"}}> investment offerings →</a>
                </p>
            </div>
        </div>
     );
}

export default Hero;
