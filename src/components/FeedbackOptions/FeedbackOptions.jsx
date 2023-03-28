import PropTypes from 'prop-types'
import { Btn, Item, List } from './FeedbackOptions.stuyled'

const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
        <List >
            {Object.keys(options).map((item) => {
                return (
                    <Item key={item} >
                        <Btn onClick={() => leaveFeedback(item)}>{item}</Btn>
                    </Item>
                )
            })}
        </List>
    )
}

FeedbackOptions.prototype = {
    options: PropTypes.object,
    leaveFeedback: PropTypes.func
}
export default FeedbackOptions;