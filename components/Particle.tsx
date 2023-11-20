"use client"

import { useCallback } from "react"
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Particle = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => {
    }, [])
    return (
        <Particles
            className="h-screen"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        repulse: {
                            distance: 65,
                            duration: 0.9
                        }
                    }
                },
                particles: {
                    color: {
                        value: "##0fee0f"
                    },
                    links: {
                        color: "#0fee0f",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 2
                    },
                    collisions: { //collisions
                        enable: true,
                    },
                    move: {
                        enable: true,
                        direction: "top-left",
                        outModes: {
                            default: "bounce"
                        },
                        random: true,
                        straight: false,
                        speed: 2
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 105
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 5 }
                    }
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particle;