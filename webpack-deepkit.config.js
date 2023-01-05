const typeCompiler = require('@deepkit/type-compiler');

module.exports = (config, _context) => {
    config.module.rules
        .filter((rule) => rule.loader?.includes('ts-loader'))
        .forEach((tsRule) => {
            tsRule.options.getCustomTransformers = addDeepkitTransformer(tsRule.options.getCustomTransformers)
        });

    return config
};

// this enables @deepkit/type's type compiler
function addDeepkitTransformer(prevGetCustomTransformers) {
    return (program) => {
        const customTransformers = { ...(prevGetCustomTransformers ? prevGetCustomTransformers(program) : undefined) };
        customTransformers.before = [
            typeCompiler.transformer,
            ...(customTransformers.before || [])
        ];
        customTransformers.afterDeclarations = [
            typeCompiler.declarationTransformer,
            ...(customTransformers.afterDeclarations || [])
        ];
        // console.log(customTransformers);
        return customTransformers
    }
}
