import React from 'react';
import styles from './StoryCard.module.css'

const SimilarCard = () => {
    return (
        <div className={styles.similarCardContainer}>
            <div>
                <img src="https://picsum.photos/200" alt="img" />
            </div>
            <div>
                <h4>sakline sk</h4>
            </div>
        </div>
    );
};

export default SimilarCard;
