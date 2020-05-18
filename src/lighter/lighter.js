import './lighter.scss';

function lighter(rootElSelector) {

    const rootElement = document.querySelector(rootElSelector);
    const lamps = rootElement.querySelectorAll('.lighter__lamp');
    const btnSwitcher = rootElement.querySelector('.lighter__switcher');

    let isEnable = false;
    let oldPos = 0;

    function toggleLight() {
        lamps.forEach((lamp, i) => {           
                lamp.addEventListener('click', activateLight);         

            function activateLight() {
                if (isEnable) {
                    lamp.classList.toggle('activate');
                    if (i !== oldPos) {
                        lamps[oldPos].classList.remove('activate');
                    }
                    oldPos = i;
                } else {
                    lamp.removeEventListener('click', activateLight);
                }
            }
        });
    }

   function switchLighter() {
        btnSwitcher.addEventListener('click', () => {
            if (!isEnable) {
                isEnable = true;
                toggleLight();
            } else {
                offAll();
                isEnable = false;
            }
        });
    }

    function offAll() {
        lamps.forEach((lamp) => {
            lamp.classList.remove('activate');            
        });
    }

    switchLighter();
}

lighter('.LighterW1');
lighter('.LighterW2');