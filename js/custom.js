var rule = CSSRulePlugin.getRule('.grd-box:before');

// var tl = gsap.timeline({
//     defaults: {duration: 1}
// });

gsap.from('.grd-box', {
    y: -500,
    opacity: 0,
    duration: 1.5
});