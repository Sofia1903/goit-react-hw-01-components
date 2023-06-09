import PropTypes, { object } from 'prop-types';
import { getRandomColor } from 'js/getRandomColor';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const itemColor = {
            backgroundColor: getRandomColor(),
          };

          return (
            <li className={css.item} style={itemColor} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(object).isRequired,
};
