import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TopicSearch from "../TopicSearch";


describe('header component', () => {
  it('should render', () => {
    const { wrapper, getByTestId } = render(<TopicSearch />);
    const header = getByTestId('topic-search');

    expect(header).toHaveTextContent('Write you favorite topic below');
    expect(wrapper).toMatchSnapshot();
  });

  it('should remove default topic and look for other topic', () => {
    let mockState = "mocked-state"
    const mockOnCriteriaChangeHandler = jest.fn((e) => { mockState = e.target.value });

    const { wrapper, getByTestId } = render(<TopicSearch state={mockState} onCriteriaChangeHandler={mockOnCriteriaChangeHandler} />);
    const header = getByTestId('topic-search');

    expect(wrapper).toMatchSnapshot();

    expect(header).toHaveTextContent('Write you favorite topic below');
    expect(getByTestId('topic-search__input')).toHaveValue(mockState);


    fireEvent.change(getByTestId('topic-search__input'), { target: { value: '' } });
    expect(mockOnCriteriaChangeHandler).toHaveBeenCalled();
    expect(mockState).toBe('');

    fireEvent.change(getByTestId('topic-search__input'), { target: { value: 'react-hooks' } });
    expect(mockState).toBe('react-hooks');
  })
})
