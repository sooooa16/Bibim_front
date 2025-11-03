const navClick = (clickedLiElement) => {

    const clickedIcon = clickedLiElement.querySelector('.nav-icon');
    const clickedIconSrc = clickedIcon.src;

    if (clickedIconSrc.includes('PlaceMarker_unactive.png')) {
        return;
    }

    if (clickedIconSrc.includes('_unactive.png')) {
        clickedIcon.src = clickedIconSrc.replace('_unactive.png', '_active.png');
    }

};