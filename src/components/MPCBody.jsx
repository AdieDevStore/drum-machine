import React from 'react'
import MPCScreen from './MPCScreen'
import '../styles/mpcbody.css'

function MPCBody() {
  
    return (
        <div className="container-main">
            <div className='screen-container'>
                <MPCScreen />
            </div>
            <div className='container-abso'>
                <div className='flex-container'>
                    <div className='pad-grid-container'>
                        <div id="1"></div>
                        <div id="3"></div>
                        <div id="2"></div>
                        <div id="4"></div>
                        <div id="5"></div>
                        <div id="6"></div>
                        <div id="7"></div>
                        <div id="8"></div>
                        <div id="9"></div>
                    </div>
                </div>
            </div>
            <div className='misc-buttons'>  
                {/* These are non-functional buttons*/}
                <div className='etc-container'>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                </div>
            </div>
            <div className='blue-block'>
                {/* These are non-functional buttons*/}
                <div className="blue-container">
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                    <div id='blue-1'></div>
                </div>
            </div>
        </div>
  )
}

export default MPCBody