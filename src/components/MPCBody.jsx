import React from 'react'
import MPCScreen from './MPCScreen'
import '../styles/mpcbody.css'

function MPCBody() {

    const sound = 'src/assets/Cev_H2.mp3';

    function playSound(path) {

        const aud = new Audio(path);
        aud.muted = false;
        aud.play(path);
    }
  
    return (
        <div className="container-main">
            <div className='screen-container'>
                <MPCScreen />
            </div>
            <div className='container-abso'>
                <div className='flex-container'>
                    <div className='pad-grid-container'>
                        <div id="1" onClick={playSound("src/assets/Heater-1.mp3")}></div>
                        <div id="3" onClick={playSound("src/assets/Heater-2.mp3")}></div>
                        <div id="2" onClick={playSound("src/assets/Heater-3.mp3")}></div>
                        <div id="4" onClick={playSound("src/assets/Heater-4_1.mp3")}></div>
                        <div id="5" onClick={playSound("src/assets/Heater-6.mp3")}></div>
                        <div id="6" onClick={playSound("src/assets/Kick_n_Hat.mp3")}></div>
                        <div id="7" onClick={playSound("src/assets/Cev_H2.mp3")}></div>
                        <div id="8" onClick={playSound("src/assets/RP4_KICK_1")}></div>
                        <div id="9" onClick={playSound("src/assets/Dsc_Oh.mp3")}></div>
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
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
                    <div id="item-1"></div>
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
            <div className='more-buttons'>
                <div className='above-round-cont'>
                    <div id='above-round-1'></div>
                    <div id='above-round-2'></div>
                </div>
                <div className='round-button-container'>
                </div>
                <div className='other-button-conatiner'>
                    <div id='id-other-1'></div>
                    <div id='id-other-2'></div>
                    <div id='id-other-3'></div>
                </div>
            </div>
        </div>
  )
}

export default MPCBody