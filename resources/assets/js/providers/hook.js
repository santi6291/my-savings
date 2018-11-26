function buildString(hookName) {
    let selector = '[data-js-hook';
    selector += (!hookName || hookName === '*') ? ']' : `~=${hookName}]`;
    return selector;
}

const hook = (hookName) => {
    const selector = buildString(hookName);
    return document.querySelector(selector);
}

const hookStr = (hookName) => {
    const selector = buildString(hookName);
    return selector;
}

module.exports = {hook, hookStr};
