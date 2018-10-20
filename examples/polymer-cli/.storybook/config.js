import { configure } from '@storybook/polymer';
import { withOptions } from '@storybook/addon-options';

withOptions({
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  require('../src/stories/index.stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
