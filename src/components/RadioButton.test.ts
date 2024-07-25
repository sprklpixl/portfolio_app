import { render } from '@testing-library/react';
import RadioButton from './RadioButton';
import { radioButtonInteractions } from './RadioButton.lib';

test('RadioButton interactions', async () => {
  const { container } = render(<RadioButton name="sample-radio" value="sample" />);
  await radioButtonInteractions(container);
});
