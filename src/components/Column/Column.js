import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>

        <div className={styles.cards}>
          {cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}

        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>

      </section>
    );}
}

export default Column;
