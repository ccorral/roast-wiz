export function getBeans(state) {
  return state.beans.beanList;
}

export function isFetchingBeans(state) {
    return state.beans.isFetching
}

export function getBeanDetail(state, bean_id) {
    return state.beans.beanList[bean_id]
}

export function getBeanRoastList(state, bean_id) {
    const bean = state.beans.beanList[bean_id]
    const roastIds = Object.keys(bean.roasts)
    let roastList = []
    roastIds.forEach(id => {
        roastList.push(state.roasts.roastList[id])
    })
    return roastList
}
