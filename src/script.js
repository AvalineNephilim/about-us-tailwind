// gsap.register(ScrollTrigger)
gsap.to('#vdo', {
    width: '100%',
    height: '100%',
    ease: 'Power1.out',
    scrollTrigger: {
        trigger: '#video',
        // markers: true,
        start: 'top 30%',
        end: 'bottom bottom',
        toggleActions: "play pause resume reset",
        // scrub:1,
    }
})

document.addEventListener("DOMContentLoaded", function (event) {
    let form = document.getElementById('form')
    form.addEventListener('click', function (e) {
        if (e.target.classList.contains('form-container')) {
            form.classList.toggle('hidden')
        }
    })
    document.querySelectorAll('.apply').forEach((button) => {
        button.addEventListener('click', function (e) {
            let position = e.target.getAttribute('data-position')
            // let position_form = document.getElementById('position')
            document.getElementById('position').value = position
            form.classList.toggle('hidden')
        })
    })
});