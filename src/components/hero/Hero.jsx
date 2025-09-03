import React, { useEffect, useRef } from "react";
import bg from "../../assets/images/bg.png";
import SocialRail from "../overlays/SocialRail.jsx";
import RightRail from "../overlays/RightRail.jsx";
import BottomCTAs from "../overlays/BottomCTAs.jsx";
import Fireworks from "../overlays/Fireworks.jsx";

export default function Hero() {
    const bgRef = useRef(null);

    // Smooth parallax background (always on)
    useEffect(() => {
        let raf = 0;
        const speed = 0.22;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const y = -window.scrollY * speed;
                if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
                raf = 0;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <header className="relative overflow-hidden h-screen" aria-label="Hero">
            {/* Parallax background */}
            <div
                ref={bgRef}
                className="absolute inset-0 -z-20 will-change-transform"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Global darkening for consistent contrast */}
            <div className="absolute inset-0 -z-10 bg-black/45" />

            {/* Subtle neon tint overlay (keeps the vibe, doesn’t reduce contrast) */}
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(30,144,255,0.18) 0%, rgba(255,0,153,0.14) 55%, rgba(0,255,133,0.10) 100%)",
                    mixBlendMode: "overlay"
                }}
            />

            {/* Bottom scrim for body lines (no boxes, just a gradient) */}
            <div className="scrim-bottom absolute inset-x-0 bottom-0 h-[40%] pointer-events-none -z-10" />

            {/* Ambient fireworks */}
            <Fireworks />

            {/* Rails */}
            <SocialRail />
            <RightRail />

            {/* Centered content */}
            <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                <h2
                    className="text-3xl md:text-5xl font-arcade tracking-widest text-outline-soft"
                    style={{ color: "var(--color-primary)" }}
                >
                    WELCOME TO
                </h2>

                {/* Single-line headline, shimmer removed */}
                <h1
                    className="mt-5 font-arcade text-4xl md:text-7xl leading-tight [letter-spacing:4px] text-white text-stroke-strong"
                    style={{ whiteSpace: "nowrap" }}
                >
                    CODEUTSAVA 9.0
                </h1>

                <p className="mt-8 text-xl md:text-3xl font-semibold tracking-wide text-white text-outline-strong">
                    CODE. INNOVATE. CELEBRATE.
                </p>

                <p className="mt-3 text-xs md:text-sm tracking-[0.25em] text-white text-outline-strong">
                    CENTRAL INDIA’S <span style={{ color: "var(--color-accent-2)" }}>LARGEST CODING EVENT.</span>{" "}
                    JOIN US ON <b style={{ color: "var(--color-primary)" }}>10—11 OCTOBER.</b>
                </p>
            </div>

            <BottomCTAs />
        </header>
    );
}
