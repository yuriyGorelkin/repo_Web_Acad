function lighterWidget(rootElSelector) {
    const rootElement = document.querySelector(rootElSelector);
    const lamps = rootElement.querySelectorAll('.lamp');
    const globalSwitcher = rootElement.querySelector('.globalSwitcher');

    let isInabled = true;


    lamps.forEach(lamp => {
        let btn = lamp.querySelector('.lamp__toggler');
        btn.addEventListener('click', lampsToggle);

        function lampsToggle() {
            lamp.classList.toggle('lampActive');
            isInabled = true;
        }
    });

    globalSwitcher.addEventListener('click', switchAll);

    function switchAll() {
        if (isInabled) {
            offAll();
        } else {
            onAll();
        }
    }

    function offAll() {
        lamps.forEach(lamp => {
            lamp.classList.remove('lampActive');
        });
        isInabled = false;
    }

    function onAll() {
        lamps.forEach(lamp => {
            lamp.classList.add('lampActive');
        });
        isInabled = true;
    }

    switchAll();
}

lighterWidget('#lamps1');
lighterWidget('#lamps2');