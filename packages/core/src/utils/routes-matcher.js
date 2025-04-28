function routesMatcher(mask, route) {
    const maskSegments = mask.split('/');
    const routeSegments = route.split('/');
    if (maskSegments.length !== routeSegments.length) {
        return false;
    }
    for (let i = 0; i < maskSegments.length; i++) {
        const maskSegment = maskSegments[i];
        const routeSegment = routeSegments[i];
        if (maskSegment.startsWith(':')) {
            continue;
        } else if (maskSegment !== routeSegment) {
            return false;
        }
    }    
    return true;
}
export{
    routesMatcher
}