import { render } from "@testing-library/react";
import Header from "../Header";


describe('header component', () => {
  it('should render', () => {
    const { wrapper, getByTestId } = render(<Header />);
    const header = getByTestId('header');

    expect(header).toHaveTextContent('Stargazer search');
    expect(wrapper).toMatchSnapshot();
  });
})