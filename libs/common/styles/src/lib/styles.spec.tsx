import { render } from '@testing-library/react';

import Styles from './styles';

describeStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Styles />);
    expect(baseElement).toBeTruthy();
  });
});
