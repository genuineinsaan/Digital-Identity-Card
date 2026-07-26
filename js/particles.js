particlesJS("particles-js", {

    particles: {

        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#60a5fa"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 150,
                line_linked: {
                    opacity: 0.8
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});