exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
