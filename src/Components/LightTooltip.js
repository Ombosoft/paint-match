import { useState } from "react";

// Simple and fast tooltip
export default function LightTooltip({ children, title }) {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ position: 'relative' }}
        >
            {children}
            {hover && (
                <div className="LightTooltip"
                >
                    {title}
                </div>
            )}
        </div>
    );
}

