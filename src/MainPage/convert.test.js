import { render, screen } from '@testing-library/react';
import InputsComponent from "./InputsComponent"

test('ensure amount input is displayed', () => {
    render(<InputsComponent />)
    let inputEl = screen.getByPlaceholderText(/hello/i)
    expect(inputEl).toBeInTheDocument()
})