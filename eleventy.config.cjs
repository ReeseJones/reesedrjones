const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const sass = require("sass");
const path = require("node:path");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",

        compile: function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);

            if (parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent, {
                loadPaths: [parsed.dir || ".", this.config.dir.includes]
            });

            this.addDependencies(inputPath, result.loadedUrls);

            return (data) => {
                return result.css;
            };
        }
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
