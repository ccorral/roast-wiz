export function getRoasts(state) {
  return state.roasts.roastList;
}

export function isFetchingRoasts(state) {
    return state.roasts.isFetching
}

export function getRoastDetail(state, roast_id) {
    return state.roasts.roastList[roast_id]
}

export function getBeanForRoast(state, roast_id) {
    const bean_id = state.roasts.roastList[roast_id].bean_id
    return state.beans.beanList[bean_id]
}
