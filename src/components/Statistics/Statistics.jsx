import PropTypes from 'prop-types'
import { StatisticsList, StatisticsItem } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
    return (
        <StatisticsList>
            <StatisticsItem>Good:{good}</StatisticsItem>
            <StatisticsItem>Neutral:{neutral}</StatisticsItem>
            <StatisticsItem>Bad:{bad}</StatisticsItem>
            <StatisticsItem>Total:{total}</StatisticsItem>
            <StatisticsItem>Positive feedback:
                {total > 0
                    ? feedbackPercentage
                    : 0}
                %</StatisticsItem>
        </StatisticsList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    feedbackPercentage: PropTypes.string
}
export default Statistics;