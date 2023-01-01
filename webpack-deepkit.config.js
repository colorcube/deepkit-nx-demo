const typeCompiler = require('@deepkit/type-compiler');

module.exports = (config, context) => {

  for (const i in config.module.rules) {
    if (config.module.rules[i].loader && config.module.rules[i].loader.includes('ts-loader')) {
      // this enables @deepkit/type's type compiler
      config.module.rules[i].options.getCustomTransformers =
        (program, getProgram) => ({
          before: [typeCompiler.transformer],
          afterDeclarations: [typeCompiler.declarationTransformer],
        });
    }
  }

  return config;
};

