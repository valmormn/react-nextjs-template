import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    //expect().toBeInTheDocument()
    //screen.getByRole('heading', { name: /react advanced/i })

    //expect(container.firstChild).toMatchSnapshot()
  })

  //it('should render colors correctly', () => {
  //  const { container } = render(<Main />)

  //  expect(container.firstChild).toHaveStyle({ color: '#111' })
  //})
})
