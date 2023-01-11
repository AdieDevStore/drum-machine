import React from 'react'
import MPCScreen from './MPCScreen'
import '../styles/mpcbody.css'

function MPCBody() {
  
    return (
        <div className="container-main">
            <div className='top-shoulder'></div>
                <div className='screen-container'>
                    <MPCScreen />
                </div>
                <div className='container-abso'>
                    <div className='flex-container'>
                        <div className='pad-grid-container'>
                            <div id="1">Pad 1</div>
                            <div id="3">Pad 3</div>
                            <div id="2">Pad 2</div>
                            <div id="4">Pad 4</div>
                            <div id="5">Pad 5</div>
                            <div id="6">Pad 6</div>
                            <div id="7">Pad 7</div>
                            <div id="8">Pad 8</div>
                            <div id="9">Pad 9</div>
                        </div>
                    </div>
                </div>
            <div className='bottom-shoulder'></div>
        </div>
  )
}

export default MPCBody