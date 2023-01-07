import { TOGGLE_FILTER } from './types';

const initialState = {
	filterState: 'fast',
};

export const filterReducer = (state = initialState, action) => {
	// console.log('filterReducer >', action)

	switch (action.type) {
		case TOGGLE_FILTER:
			return {
				...state,
				filterState: state.filterState === 'fast' ? 'cheap' : 'fast',
			};
		default:
			return state;
	}
};
