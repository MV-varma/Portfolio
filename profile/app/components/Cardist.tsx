"use client";

import React, { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface TiltCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ 
  imageSrc, 
  imageAlt = "Card image", 
  title = "Hover Me", 
  description = "3D Tilt Effect",
  className = "" 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Rotation mapping
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className=" w-full h-full max-w-sm">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full w-full rounded-xl shadow-2xl bg-gray-900/50 flex flex-col overflow-hidden cursor-pointer ${className}`}
      >
        {/* Image Section */}
        {imageSrc && (
          <div className="absolute inset-0 h-full w-full overflow-hidden [transform-translateZ(20px)] shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className=" object-cover"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
        )}

        <motion.div 
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "translateZ(10px)" }}
        />

        
        {/* Content Section */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
           className="container border-2 absolute shadow-2xl shadow-purple-600 inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-bold text-purple-100 mb-2">
            {title}
          </h2>
          <p className="text-white">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TiltCard;   