import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { PatternLibrary } from '../src/PatternLibrary.js';
import '../pattern-library.js';

storiesOf('pattern-library', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PatternLibrary))
  .add(
    'Alternative Title',
    () => html`
      <pattern-library .title=${'Something else'}></pattern-library>
    `,
  );
