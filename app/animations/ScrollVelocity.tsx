import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";

interface VelocityMapping {
    input: [number, number];
    output: [number, number];
}

interface VelocityTextProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
    texts: React.ReactNode[]; // Can be any array of elements
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
    texts = [],
    velocity = 100,
    className = "",
    numCopies = 8,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
}) => {
    function VelocityText({
        children,
        baseVelocity = velocity,
        className = "",
        damping,
        stiffness,
        numCopies,
        parallaxClassName,
        scrollerClassName,
        parallaxStyle,
        scrollerStyle,
    }: VelocityTextProps) {
        const baseX = useMotionValue(0);

        const copyRef = useRef<HTMLSpanElement>(null);

        const x = useSpring(baseX, {
            damping: damping ?? 50,
            stiffness: stiffness ?? 400,
        });

        // For continuous animation without scroll input
        useAnimationFrame((t, delta) => {
            const moveBy = baseVelocity * (delta / 1000);
            baseX.set(baseX.get() + moveBy); // Move the element continuously
        });

        const elements = [];
        for (let i = 0; i < numCopies!; i++) {
            elements.push(
                <span
                    className={`flex-shrink-0 ${className}`}
                    key={i}
                    ref={i === 0 ? copyRef : null}
                >
                    {children}
                </span>
            );
        }

        return (
            <div
                className={`${parallaxClassName} relative overflow-hidden`}
                style={parallaxStyle}
            >
                <motion.div
                    className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
                    style={{ x, ...scrollerStyle }}
                >
                    {elements}
                </motion.div>
            </div>
        );
    }

    return (
        <section>
            {texts.map((element, index) => (
                <VelocityText
                    key={index}
                    className={className}
                    baseVelocity={index % 2 !== 0 ? -velocity : velocity} // To change the direction for different elements
                    numCopies={numCopies}
                    parallaxClassName={parallaxClassName}
                    scrollerClassName={scrollerClassName}
                    parallaxStyle={parallaxStyle}
                    scrollerStyle={scrollerStyle}
                >
                    {element}
                </VelocityText>
            ))}
        </section>
    );
};

export default ScrollVelocity;
