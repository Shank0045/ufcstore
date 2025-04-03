function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.mainloco'),
        smooth: true,
        lerp:0.09,
    });
}

locomotive()