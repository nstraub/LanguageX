export default function traverse(origin, proplist) {
    if (!proplist.length) {
        return origin;
    }
    return traverse(origin[proplist.shift()], proplist);
}
