import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';
import { RiEmotionHappyFill } from 'react-icons/ri';
import { MdOutlineSentimentNeutral } from 'react-icons/md';
import { FaSadTear } from 'react-icons/fa';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.divStatistics}>
    <p className={styles.labelStat}>
      <RiEmotionHappyFill className={styles.icons}/> Good:
      <span className={styles.value}> {good}</span>
    </p>
    <p className={styles.labelStat}>
      <MdOutlineSentimentNeutral className={styles.icons} /> Neutral:
      <span className={styles.value}> {neutral}</span>
    </p>
    <p className={styles.labelStat}>
      <FaSadTear className={styles.icons} /> Bad:
      <span className={styles.value}> {bad}</span>
    </p>
    <p className={styles.labelStat}>Total:
      <span className={styles.value}> {total}</span>
    </p>
    <p className={styles.labelStat}>Positive Feedback Percentage:
      <span className={styles.valuePercentage}> {positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
