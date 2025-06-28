
import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import React from 'react'

const PizzaCard = ({ imgUrl, link, username, func}) => {
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      display: 'flex',
      alignItems: 'center',
      height: '200px',
      width: '300px',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '8px',
      marginRight: '16px',
    },
  };

  return (
    <div style={styles.card} onClick={func}>
      <img
        style={styles.image}
        src={imgUrl || "https://via.placeholder.com/100"} alt="Pizza" />
      <div>
        <h3>{username || "Margherita"}</h3>
        <a href={link || "#"}>Link</a>
        <p>$99.99</p>
      </div>
    </div>
  );
}

export default PizzaCard