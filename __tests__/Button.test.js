import React from 'react';
import Button from '../src/components/button';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Button component', () => {
	let mockOnClick;
	beforeEach(() => {
		mockOnClick = jest.fn();
	});
	it('renders with correct text and style class', () => {
		const { getByText, container } = render(
			<Button
				onClick={mockOnClick}
				text="Click me!"
				styleClass="custom-button"
			/>
		);
		expect(getByText('Click me!')).toBeInTheDocument();
		expect(container.firstChild).toHaveClass('custom-button');
	});
	it('calls onClick function when clicked', () => {
		const { getByText } = render(
			<Button onClick={mockOnClick} text="Click me!" />
		);
		fireEvent.click(getByText('Click me!'));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
