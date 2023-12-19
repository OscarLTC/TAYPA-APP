import React from 'react';
import { render } from '@testing-library/react-native';

import GoogleLogo from './GoogleLogo';

describe('GoogleLogo', () => {
  it('should render successfully', () => {
    const { root } = render(< GoogleLogo />);
    expect(root).toBeTruthy();
  });
});
