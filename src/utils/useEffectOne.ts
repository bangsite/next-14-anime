import React, { useEffect, useState } from 'react';

const useEffectOnce = (effect: React.EffectCallback) => {
    const [hasRun, setHasRun] = useState(false);

    useEffect(() => {
        if (!hasRun) {
            effect();
            setHasRun(true);
        }
    }, [hasRun, effect]);
};

export default useEffectOnce;
