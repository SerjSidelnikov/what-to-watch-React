import * as React from "react";
import {shallow} from 'enzyme';

import withActiveCard from './with-active-card';

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveCard(MockComponent);

describe(`withActiveCard`, () => {
  it(`When you hover the cursor on the card plays video.`, () => {
    jest.useFakeTimers();

    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.props().isPlaying).toEqual(false);

    wrapper.props().onMouseEnter();
    jest.advanceTimersByTime(1000);

    expect(wrapper.props().isPlaying).toEqual(true);
    jest.useRealTimers();
  });

  it(`When you move the cursor from the card, the video stops.`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().onMouseLeave();

    expect(wrapper.props().isPlaying).toEqual(false);
  });
});
