import traverse from './traverse';

export default function (state, propList) {
    var ret = {};
    if (propList.propList) {
        propList = propList.propList;
        propList.forEach(function (prop) {
            ret[prop.split('.').pop()] = traverse(state, prop.split('.'));
        });
    }
    ret.id = state.user._id;

    return ret;
};
