import './class_lighter.scss';

class Lighter {
    constructor(rootElSelector) {
        this.rootElement = document.querySelector(rootElSelector);
        this.lamps = this.rootElement.querySelectorAll('.lighter__lamp');
        this.btnSwitcher = this.rootElement.querySelector('.lighter__switcher');

        this.isEnable = false;
        this.activateLight = this.activateLight.bind(this);
    }

    init() {
        this.switchLighter();
    }

    toggleLight() {
        this.lamps.forEach((lamp) => {
            lamp.addEventListener('click', this.activateLight);
        });
        this.btnSwitcher.classList.add('activate');
    }

    activateLight() {
        this.offAllLight();
        event.target.classList.add('activate');
    }

    switchLighter() {
        this.btnSwitcher.addEventListener('click', () => {
            if (!this.isEnable) {
                this.isEnable = true;
                this.toggleLight();
            } else {
                this.offAllLight();
                this.deactivateLights();
                this.isEnable = false;
            }
        });
    }

    offAllLight() {
        this.lamps.forEach((lamp) => {
            lamp.classList.remove('activate');
        });
    }

    deactivateLights() {
        this.lamps.forEach((lamp) => {
            lamp.removeEventListener('click', this.activateLight);
        });
        this.btnSwitcher.classList.remove('activate');
    }

}

const lighter1 = new Lighter('.LighterW1');
lighter1.init();

const lighter2 = new Lighter('.LighterW2');
lighter2.init();