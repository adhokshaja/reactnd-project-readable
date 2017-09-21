import {
    LOAD_POSTS,
    ADD_POST,
    UPVOTE_POST,
    DOWNVOTE_POST,
    EDIT_POST,
    DELETE_POST,
} from '../actions'

import { objectFromArray } from '../utils/helpers'

const DefaultState = {};

export default function posts(state = DefaultState, action) {
    const { posts, post, post_id } = action;
    switch (action.type) {
        case LOAD_POSTS:
            const availablePosts = posts.filter(p => p.deleted !== true); // load posts that are not deleted
            return {
                ...state,
                ...objectFromArray(availablePosts)
            }
        case ADD_POST:
        case EDIT_POST:
            return {
                ...state,
                [post_id]: post
            }
        case UPVOTE_POST:
            return {
                ...state,
                [post_id]: {
                    ...state[post_id],
                    voteScore: state[post_id]['voteScore'] + 1
                }
            }
        case DOWNVOTE_POST:
            return {
                ...state,
                [post_id]: {
                    ...state[post_id],
                    voteScore: state[post_id]['voteScore'] - 1
                }
            }
        case DELETE_POST:
            var newfilteredState = {...state }
            delete newfilteredState[post_id]
            return newfilteredState;
        default:
            return state
    }
}