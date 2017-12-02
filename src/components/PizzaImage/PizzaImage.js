import React from 'react';

import styles from './PizzaImage.css';
import pizza from '../../assets/pizza.jpg';

const PizzaImage = (props) => {
  return (
    <div className={styles.PizzaImage} >
      <img src={pizza} className={styles.PizzaImg} />
    </div>
  );
};

export default PizzaImage;