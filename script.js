        // Cursor trail effect
        const numTrails = 12;
        const trails = [];
        
        // Create cursor trail elements
        for (let i = 0; i < numTrails; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            trails.push({
                element: trail,
                x: 0,
                y: 0,
                delay: i * 2
            });
        }

        // Track mouse position
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animation loop
        function animate() {
            trails.forEach((trail, index) => {
                // Calculate trail position with delay
                const dx = mouseX - trail.x;
                const dy = mouseY - trail.y;
                
                trail.x += dx * 0.2;
                trail.y += dy * 0.2;
                
                // Update trail element position
                trail.element.style.transform = `translate(${trail.x}px, ${trail.y}px)`;
                
                // Scale trails based on index
                const scale = 1 - (index / numTrails) * 0.6;
                trail.element.style.width = `${10 * scale}px`;
                trail.element.style.height = `${10 * scale}px`;
                trail.element.style.opacity = scale * 0.7;
            });
            
            requestAnimationFrame(animate);
        }

        animate();
