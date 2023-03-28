import Title from 'components/Title/Title'
import PropTypes from 'prop-types';
import { Container } from './Section.styled'

function Section({ title, children }) {
    return (
        <Container>
            <Title title={title} />
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}
export default Section