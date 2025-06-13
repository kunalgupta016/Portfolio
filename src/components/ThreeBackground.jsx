import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameId = useRef(0);

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const geometries = [];
    const materials = [];
    const meshes = [];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.5, 0);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(
          Math.random() * 0.3 + 0.7,
          0.7,
          0.5
        ),
        transparent: true,
        opacity: 0.8,
        wireframe: Math.random() > 0.5
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        initialY: mesh.position.y,
        floatSpeed: Math.random() * 0.02 + 0.01
      };

      scene.add(mesh);
      geometries.push(geometry);
      materials.push(material);
      meshes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8B5CF6, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x06B6D4, 1, 100);
    pointLight.position.set(-10, -10, -10);
    scene.add(pointLight);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      meshes.forEach((mesh) => {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;

        mesh.position.y = mesh.userData.initialY +
          Math.sin(Date.now() * mesh.userData.floatSpeed) * 0.5;

        mesh.rotation.x += mouseX * 0.001;
        mesh.rotation.y += mouseY * 0.001;
      });

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }

      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="three-canvas"
      className="fixed inset-0 -z-10 min-h-screen w-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
