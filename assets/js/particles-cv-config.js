/* Configuración personalizada para particles.js en la vista del CV */
window.particlesCvConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#e2e2e2",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.05,
        sync: false,
      },
    },
    size: {
      value: 1.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#e2e2e2",
      opacity: 0.15,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 0.25,
        },
      },
      bubble: {
        distance: 250,
        size: 3,
        duration: 2,
        opacity: 0.4,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
