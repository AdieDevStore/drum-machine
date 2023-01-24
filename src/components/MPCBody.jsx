import React, { useEffect, useState } from 'react'
import MPCScreen from './MPCScreen'
import '../styles/mpcbody.css'

function MPCBody() {

    const [pads, setPads] = useState([
        
        {
            id: "q",
            src: "src/assets/Heater-1.mp3"
        },
        {
            id: "w",
            src: "src/assets/Heater-2.mp3"
        }, 
        {
            id: "e",
            src: "src/assets/Heater-3.mp3"
        },
        {
            id: "a",
            src: "src/assets/Heater-4_1.mp3"
        },
        {
            id: "s",
            src: "src/assets/Heater-6.mp3"
        },
        {
            id: "d",
            src: "src/assets/Kick_n_Hat.mp3"
        },
        {
            id: 'z',
            src: "src/assets/Cev_H2.mp3"
        },
        {
            id: "x",
            src: "src/assets/RP4_KICK_1.mp3"
        },
        {
            id: "c",
            src: "src/assets/Dsc_Oh.mp3"
        }

    ])

    const handleKeyDown = event => {
        
        event.preventDefault;

        pads.forEach(element => {
            if(element.id === event.key) {
                const audio = new Audio(element.src)
                audio.play()
            }  
        });
    }

    {/*
   
    Changes syle on key down 

    */}
    const keyDownStyle = eve => {
        eve.preventDefault; 

        pads.forEach(elm => {
            if(elm.id === eve.key) {
                document.getElementById(elm.id).style.backgroundColor = 'black';
            }
        })
    }

    // Changes style on key up

    const keyUpStyle = eve => {
        eve.preventDefault;

        pads.forEach(elm => {
            if (elm.id === eve.key){
                document.getElementById(elm.id).style.backgroundColor = "#8E969D";
            } 
        })
    }

    document.body.addEventListener('keydown', handleKeyDown)
    document.body.addEventListener('keydown', keyDownStyle)
    document.body.addEventListener('keyup', keyUpStyle)

    
    return (
        <div className="container-main">
            <div className='screen-container'>
                <MPCScreen />
            </div>
            <div className='container-abso'>
                <div className='flex-container'>
                    <div className='pad-grid-container' >
                        <div id="q"></div>
                        <div id="w"></div>
                        <div id="e"></div>
                        <div id="a"></div>
                        <div id="s"></div>
                        <div id="d"></div>
                        <div id="z"></div>
                        <div id="x"></div>
                        <div id="c"></div>
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