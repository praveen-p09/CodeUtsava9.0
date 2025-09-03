import React, { useEffect, useRef } from "react";

/**
 * Full-hero fireworks with click-to-burst and HiDPI support.
 */
export default function Fireworks() {
    const canvasRef = useRef(null);
    const rafRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: true });

        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = Math.round(width * DPR);
            canvas.height = Math.round(height * DPR);
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        // size to full viewport
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        const rand = (min, max) => Math.random() * (max - min) + min;

        class Particle {
            constructor(x, y, hue) {
                this.x = x;
                this.y = y;
                this.vx = rand(-2.2, 2.2);
                this.vy = rand(-5.2, -1.4);
                this.alpha = 1;
                this.life = rand(55, 90);
                this.age = 0;
                this.hue = hue;
                this.size = rand(1.2, 2.8);
                this.gravity = 0.04;
                this.friction = 0.97;
            }
            step() {
                this.age++;
                this.vx *= this.friction;
                this.vy = this.vy * this.friction + this.gravity;
                this.x += this.vx;
                this.y += this.vy;
                this.alpha = Math.max(0, 1 - this.age / this.life);
            }
            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue},100%,60%,${this.alpha})`;
                ctx.fill();
            }
            get dead() { return this.alpha <= 0.02; }
        }

        const particles = [];
        const MAX_PARTICLES = 2200;

        const spawnBurst = (cx, cy) => {
            const hue = Math.floor(rand(0, 360));
            const count = 42;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(cx, cy, hue));
            }
            if (particles.length > MAX_PARTICLES) particles.splice(0, particles.length - MAX_PARTICLES);
        };

        // random bursts across entire width, upper 65% of hero
        const loop = (t = 0) => {
            rafRef.current = requestAnimationFrame(loop);

            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0,0,0,0.55)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = "lighter";
            if (Math.random() < 0.06) {
                spawnBurst(rand(40, canvas.width - 40), rand(40, canvas.height * 0.65));
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.step();
                p.draw(ctx);
                if (p.dead) particles.splice(i, 1);
            }
        };
        loop();

        // click to burst
        const onClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * DPR;
            const y = (e.clientY - rect.top) * DPR;
            spawnBurst(x, y);
        };
        window.addEventListener("click", onClick);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("click", onClick);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 -z-5"
            aria-hidden="true"
        />
    );
}
