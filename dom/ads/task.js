const rotators = document.querySelectorAll('.rotator');

for (let i = 0; i < rotators.length; i++) {
    setRotation(rotators[i], '.rotator__case', 'rotator__case_active');
}

function setRotation(rootElement, childSelector, activeClass) {
    const rotationNodes = rootElement.querySelectorAll(childSelector);
    const rotationLength = rotationNodes.length;
    let rotationIndex = 0;
    setInterval(() => {
        for (let k = 0; k < rotationLength; k++) {
            if (k === rotationIndex) {
                rotationNodes[k].classList.add(activeClass);
            } else {
                rotationNodes[k].classList.remove(activeClass);
            }
        }
        if (rotationIndex < rotationLength - 1) {
            rotationIndex += 1;
        } else {
            rotationIndex = 0;
        }
    }, 1000);
}
