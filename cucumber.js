module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    paths: ["features/**/*.feature"],
    dryRun: false,
    require: [
      "steps/**/*.ts", 
      "hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress-bar", "html:cucumber-report.html"],
  },
};