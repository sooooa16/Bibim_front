const navClick = (clickedLiElement) => {
    
    const allIcons = document.querySelectorAll('.nav-icon');
    
    allIcons.forEach(icon => {
        const currentSrc = icon.src;

        if (currentSrc.includes('Home_active.png')) {
            icon.src = 'Image/Home_unactive.png';
        } else if (currentSrc.includes('RegionLife_active.png')) {
            icon.src = 'Image/RegionLife_unactive.png';
        } else if (currentSrc.includes('PlaceMarker_active.png')) {
            icon.src = 'Image/PlaceMarker_unactive.png';
        } else if (currentSrc.includes('Chat_active.png')) {
            icon.src = 'Image/Chat_unactive.png';
        } else if (currentSrc.includes('User_active.png')) {
            icon.src = 'Image/User_unactive.png';
        }
    });

    const clickedIcon = clickedLiElement.querySelector('.nav-icon');
    const clickedIconSrc = clickedIcon.src;

    if (clickedIconSrc.includes('Home_unactive.png')) {
        clickedIcon.src = 'Image/Home_active.png';
    } else if (clickedIconSrc.includes('RegionLife_unactive.png')) {
        clickedIcon.src = 'Image/RegionLife_active.png';
    } else if (clickedIconSrc.includes('PlaceMarker_unactive.png')) {
        clickedIcon.src = 'Image/PlaceMarker_active.png';
    } else if (clickedIconSrc.includes('Chat_unactive.png')) {
        clickedIcon.src = 'Image/Chat_active.png';
    } else if (clickedIconSrc.includes('User_unactive.png')) {
        clickedIcon.src = 'Image/User_active.png';
    }
};