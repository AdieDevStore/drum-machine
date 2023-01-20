import React, { useEffect, useState } from 'react'
import MPCScreen from './MPCScreen'
import '../styles/mpcbody.css'
import useSound from 'use-sound';
import {} from 'react';

function MPCBody() {

    const keyboard = ['w','e','r','s','d','f','x','c','v'];

    const handleKeyDown = event => {
        event.preventDefault;
        
        keyboard.forEach(key => {
            if (key === event.key){
                playPad()
            }
        })
    }

    function playPad(path){
        const [play] = useSound(path);
        return play
    }
  
    return (
        <div className="container-main" tabIndex={1} onKeyDown={handleKeyDown}>
            <div className='screen-container'>
                <MPCScreen />
            </div>
            <div className='container-abso'>
                <div className='flex-container'>
                    <div className='pad-grid-container' >
                        <div id="1" onClick={playPad("src/assets/Heater-1.mp3")}></div>
                        <div id="3" onClick={playPad("src/assets/Heater-2.mp3")}></div>
                        <div id="2" onClick={playPad("src/assets/Heater-3.mp3")}></div>
                        <div id="4" onClick={playPad("src/assets/Heater-4_1.mp3")}></div>
                        <div id="5" onClick={playPad("src/assets/Heater-6.mp3")}></div>
                        <div id="6" onClick={playPad("src/assets/Kick_n_Hat.mp3")}></div>
                        <div id="7" onClick={playPad("src/assets/Cev_H2.mp3")}></div>
                        <div id="8" onClick={playPad("src/assets/RP4_KICK_1.mp3")}></div>
                        <div id="9" onClick={playPad("src/assets/Dsc_Oh.mp3")}></div>
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