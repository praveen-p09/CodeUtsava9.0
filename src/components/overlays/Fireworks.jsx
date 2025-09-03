import React, { useEffect, useRef } from "react";

export default function Fireworks() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();

        window.addEventListener("resize", resize);

        const rand = (min, max) => Math.random() * (max - min) + min;

        class Particle {
            constructor(x, y, hue) {
                this.x = x;
                this.y = y;
                this.vx = rand(-3, 3);
                this.vy = rand(-6, -2);
                this.alpha = 1;
                this.life = rand(40, 70);
                this.age = 0;
                this.hue = hue;
                this.size = rand(1.5, 3);
                this.gravity = 0.05;
                this.friction = 0.98;
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
                ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.alpha})`;
                ctx.fill();
            }
            get dead() {
                return this.alpha <= 0.02;
            }
        }

        const particles = [];

        const spawnBurst = (cx, cy) => {
            const hue = Math.floor(rand(0, 360));
            const count = 50; // increased for fuller coverage
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(cx, cy, hue));
            }
        };

        function loop() {
            requestAnimationFrame(loop);
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = "lighter";

            if (Math.random() < 0.08) {
                spawnBurst(rand(0, canvas.width), rand(0, canvas.height * 0.5));
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.step();
                p.draw(ctx);
                if (p.dead) particles.splice(i, 1);
            }
        }

        loop();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 -z-5"
            aria-hidden="true"
        />
    );
}
