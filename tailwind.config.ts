module.exports = {
  content: [],
  safelist: [
    {
      // generate the class even it's not used
      pattern: /text-preset-\d+/,
    },
  ],
};
