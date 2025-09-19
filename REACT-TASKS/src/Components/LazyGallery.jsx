import React, { useState } from "react";

const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
];

function LazyImage({ src, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                height: "200px",
            }}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: loaded ? "blur(0px)" : "blur(20px)",
                    transform: loaded ? "scale(1)" : "scale(1.05)",
                    transition: "filter 0.5s ease, transform 0.5s ease",
                    display: "block",
                }}
            />
        </div>
    );
}

export default function LazyGallery() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Lazy Image Gallery 🌫️</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: 16,
                }}
            >
                {images.map((src, i) => (
                    <LazyImage key={i} src={src} alt={`Image ${i + 1}`} />
                ))}
            </div>
        </div>
    );
}
