(function () {
    const header = document.querySelector('.text h1');
    const subHeader = document.querySelector('.text p');
    const bg = document.querySelector('.bg');
    const navbar = document.querySelector('.navigation');
    const socialLinks = gsap.utils.toArray('.social-media .social-icon');
    const volumes = gsap.utils.toArray('.description li')
    const volumesParagraph = gsap.utils.toArray('.description p')
    const bottomNav = document.querySelector('.bottom-nav');
    gsap.to(bg, {
        width: '100%',
        duration: 1,
        ease: 'expo.inOut'
    })
    gsap.from(navbar, {
        y: "+=100",
        autoAlpha: 0,
        duration: 1,
        delay: 1
    })
    gsap.from(header,
        {
            y: '+=200',
            autoAlpha: 0,
            duration: 1,
            ease: "power3.inOut"
        })
    gsap.from(subHeader,
        {
            y: '+=100',
            autoAlpha: 0,
            duration: 1,
            ease: "power3.inOut",
            delay: 0.5
        })
    gsap.from(socialLinks, {
        x: "-=100",
        autoAlpha: 0,
        duration: 1,
        stagger: .3,
        ease: "expo.out"
    })
    gsap.from(volumes, {
        y: '+=300',
        duration: 1,
        delay: 2,
        stagger: 0.2,
        autoAlpha: 0,
        ease: "power3.inOut"
    })
    gsap.from(volumesParagraph, {
        y: '+=300',
        duration: 1,
        delay: 3,
        autoAlpha: 0,
        ease: "power3.inOut"
    })
    gsap.from(bottomNav, {
        x: "100%",
        duration: 1,
        delay: 3,
        autoAlpha: 0,
        scale: 0.6,
        ease: "power3.inOut"
    })
})()


