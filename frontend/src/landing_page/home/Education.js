import React from 'react';

function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4'>
                    <img src='media/images/index-education.svg'/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-4'>
                    <h2>Free and open market education</h2>
                    <br></br>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity -- <i class="fa-solid fa-arrow-right"></i> </a>
                    <br></br>
                    <br></br>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A --<i class="fa-solid fa-arrow-right"></i> </a>
                    <br></br>
                    <br></br>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default Education;
