document.addEventListener("DOMContentLoaded", function(e) {
    const clickBtn = document.querySelector('.btn'),
        main = document.querySelector('.main-block'),
        thenBlock = document.querySelector('.then-block'),
        popup = document.querySelector('.popup');


    /*Creating Popup Overlay*/
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    main.parentNode.insertBefore(overlay, main.nextSibling);
    overlay.appendChild(popup);


    /*Creating Popup Header*/
    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup-header';
    popup.insertBefore(popupHeader, popup.children[0]);

    const popupHeaderImgContainer = document.createElement('div');
    popupHeaderImgContainer.className = 'popup-header__closeImg-container';
    popupHeader.appendChild(popupHeaderImgContainer);

    const popupHeaderImg = document.createElement('img');
    popupHeaderImg.className = 'closeImg';
    popupHeaderImg.setAttribute('src', "./images/icon-popup-close.svg");
    popupHeaderImg.setAttribute('alt', "close-img");
    popupHeaderImgContainer.appendChild(popupHeaderImg);


    /*Creating Popup Footer*/
    const popupFooter = document.createElement('div');
    popupFooter.className = 'popup-footer';
    popup.appendChild(popupFooter);

    const popupFooterBtnContainer = document.createElement('div');
    popupFooterBtnContainer.className = 'popup-footer__btn-container';
    popupFooter.appendChild(popupFooterBtnContainer);

    const popupFooterBtnLeft = document.createElement('button');
    popupFooterBtnLeft.className = 'btn normal js-btn-cancel';
    popupFooterBtnLeft.innerHTML = 'Cancel';
    popupFooterBtnContainer.appendChild(popupFooterBtnLeft);

    const popupFooterBtnRight = document.createElement('button');
    popupFooterBtnRight.className = 'btn danger js-btn-uninstall';
    popupFooterBtnRight.innerHTML = 'Uninstall';
    popupFooterBtnContainer.appendChild(popupFooterBtnRight);




    clickBtn.addEventListener('click', () => {
        toggleDisplay();
    });
    popupHeaderImg.addEventListener('click', () => {
        toggleDisplay();
    });
    popupFooterBtnLeft.addEventListener('click', () => {
        toggleDisplay();
    });
    overlay.addEventListener('click', () => {
        toggleDisplay();
    });
    popup.addEventListener('click', () => {
        toggleDisplay();
    });

    popupFooterBtnRight.addEventListener('click', () => {
        overlay.classList.remove('element-animation');
        overlay.classList.add('new-animation');

        setTimeout(function () {
            alert('DONE');
        }, 1);
        thenBlock.style = 'display:block';
    });

    document.querySelector('.then-block')
        .addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
        }, true);


    function toggleDisplay() {
        if (main.style.display === 'none') {
            main.style.display = 'block';
            overlay.style.display = 'none';
        } else {
            main.style.display = 'none';
            overlay.style.display = 'block';
        }

    }
});
