function dynamicRoutesParser(mask, route) {
    const maskSegments = mask.split('/');
    const routeSegments = route.split('/');
    const params = {};
    if (maskSegments.length !== routeSegments.length) {
        return params; 
    }
    for (let i = 0; i < maskSegments.length; i++) {
        const maskSegment = maskSegments[i];
        const routeSegment = routeSegments[i];
        if (maskSegment.startsWith(':')) {
            const paramName = maskSegment.slice(1); 
            params[paramName] = routeSegment;
        } else if (maskSegment !== routeSegment) {
            return {};
        }
    }
    return params;
}

function isDynamic(path) {
    const DynamicPattern = /:\w+/;    
    return DynamicPattern.test(path);
}

export{
    dynamicRoutesParser,
    isDynamic
}