import React from 'react';
import SimilarCard from './SimilarCard';

const StoryCard = () => {
    return (
        <div style={{ display: 'flex', gap: '9px', alignItems: 'center', justifyContent: 'center' }}>
            <SimilarCard />
            <SimilarCard />
            <SimilarCard />
            <SimilarCard />
            <SimilarCard />
        </div>
    );
};

export default StoryCard;
