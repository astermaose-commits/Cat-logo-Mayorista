import React, { useEffect, useRef } from 'react';

export const Vortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 600;
    
    // Golden & Bronze Palette
    const colors = [
      "#FFFFFF", // Classic Gold
      "#E5E5E5", // Light Gold
      "#333333", // Deep Gold
      "#F5F5F5", // Pale Gold
      "#AA771C", // Bronze Gold
      "#FFF8DC"  // Cornsilk
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = Math.random() * 100;
      }

      update() {
        // Center of the vortex
        const cx = width / 2;
        const cy = height / 2;
        
        const dx = this.x - cx;
        const dy = this.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Vortex Physics
        const angle = Math.atan2(dy, dx);
        
        // Variables for flow
        const speed = 0.002;
        const rotationSpeed = 2 + (500 / (dist + 100)); // Faster near center
        
        // Simplex-like flow using Sine waves for organic feel
        const time = Date.now() * 0.0005;
        const flowX = Math.sin(angle + time) * 2;
        const flowY = Math.cos(angle + time) * 2;

        // Swirling force
        this.vx += (Math.cos(angle + Math.PI / 2) * rotationSpeed * 0.05) + (flowX * 0.02);
        this.vy += (Math.sin(angle + Math.PI / 2) * rotationSpeed * 0.05) + (flowY * 0.02);
        
        // Gravity/Pull to center
        this.vx -= Math.cos(angle) * 0.05;
        this.vy -= Math.sin(angle) * 0.05;

        // Friction
        this.vx *= 0.96;
        this.vy *= 0.96;

        this.x += this.vx;
        this.y += this.vy;

        // Reset particles that drift too far or get stuck in the singularity
        if (dist < 5 || this.x < -100 || this.x > width + 100 || this.y < -100 || this.y > height + 100) {
           // Respawn randomly
           this.x = Math.random() * width;
           this.y = Math.random() * height;
           this.vx = 0;
           this.vy = 0;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }

    // Initialize Particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Trail Effect: Draw semi-transparent background over previous frame
      // Using the exact void color #050505
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)'; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
      style={{ zIndex: 0 }}
    />
  );
};

export default Vortex;