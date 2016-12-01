import traverse from './traverse';


export default function (state, props) {
    var ret = {};
    if (props.propList) {
        props = props.propList;
        props.forEach(function (prop) {
            ret[prop.split('.').pop()] = traverse(state, prop.split('.'));
        });
    }
    ret.id = state.user._id;

    return ret;
}
