import { useInView } from 'react-intersection-observer';
type Animation = {
    children: JSX.Element
}
const AnimatedSection = ({ children }:Animation) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const sectionStyles = {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s, transform 0.5s',
    };

    return (
        <div ref={ref} style={sectionStyles} className="section">
            {children}
        </div>
    );
};

export default AnimatedSection;