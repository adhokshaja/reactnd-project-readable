import {
    LOAD_CATEGORIES,
} from '../actions'
import { objectFromArray } from '../utils/helpers'
export default function categories(state = {}, action) {
    const { categories } = action;

    switch (action.type) {
        // load categories to store
        case LOAD_CATEGORIES:
            return objectFromArray(categories, 'name');

            // any other action: return all categories
        default:
            return state;
    }
}