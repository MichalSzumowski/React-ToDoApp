import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const {title, cards} = this.props;

    return (
      <section className={styles.component}>
        <Container>
          <h3 className={styles.title}>
            {title}
          </h3>
      
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>

    );}
}

export default SearchResults;
