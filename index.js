import { connect } from 'react-redux';

const mapState = (selector, predicate) => (state, ownProps) => {
	return {
		predicate: () => predicate(selector(state))
	}
}

const noop = () => ({});

export const ShowTime = ({selector, predicate}) => (
	(component) => {
		return connect(mapState(selector, predicate), noop)((props) => {
			if (props.predicate()) {
				return component()
			}
			return null;
		});
	}
);