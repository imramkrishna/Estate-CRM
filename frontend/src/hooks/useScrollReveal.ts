'use client';

import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (threshold: number = 0.1) => {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: true,
    });

    return { ref, isVisible: inView };
};
