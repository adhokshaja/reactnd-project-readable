import {
    LOAD_COMMENTS,
    ADD_COMMENT,
    UPVOTE_COMMENT,
    DOWNVOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
} from '../actions'

import { objectFromArray } from '../utils/helpers'

const DefaultState = {};

export default function comments(state = DefaultState, action) {
    const { comments, comment_id, comment } = action;
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                ...objectFromArray(comments)
            }
        case ADD_COMMENT:
        case EDIT_COMMENT:
            return {
                ...state,
                [comment_id]: comment
            }
        case UPVOTE_COMMENT:
            return {
                ...state,
                [comment_id]: {
                    ...state[comment_id],
                    'voteScore': state[comment_id]['voteScore'] + 1
                }
            }
        case DOWNVOTE_COMMENT:
            return {
                ...state,
                [comment_id]: {
                    ...state[comment_id],
                    'voteScore': state[comment_id]['voteScore'] - 1
                }
            }
        case DELETE_COMMENT:
            var newfilteredState = {...state }
            delete newfilteredState[comment_id]
            return newfilteredState;
        default:
            return state
    }
}