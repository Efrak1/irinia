import React from 'react';

interface GalleryProps {
    gallery: string;
    onClose: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ gallery, onClose }) => {
    const images: { [key: string]: string[] } = {
        gallery1: [
            '/images/gallery1/photo1.jpg',
            '/images/gallery1/photo2.jpg',
            '/images/gallery1/photo3.jpg',
        ],
        gallery2: [
            '/images/gallery2/photo1.jpg',
            '/images/gallery2/photo2.jpg',
            '/images/gallery2/photo3.jpg',
        ],
        gallery3: [
            '/images/gallery3/photo1.jpg',
            '/images/gallery3/photo2.jpg',
            '/images/gallery3/photo3.jpg',
        ],
        gallery4: [
            '/images/gallery4/photo1.jpg',
            '/images/gallery4/photo2.jpg',
            '/images/gallery4/photo3.jpg',
        ],
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.gallery}>
                <button onClick={onClose} style={styles.closeButton}>Закрыть</button>
                <h2>{gallery.replace('gallery', 'Галерея ')}</h2>
                <div style={styles.images}>
                    {images[gallery].map((src, index) => (
                        <img key={index} src={src} alt={Фото ${index + 1}} style={styles.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    gallery: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
    images: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
};
