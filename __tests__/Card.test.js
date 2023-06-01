// Importing necessary dependencies
import React from 'react';
import Card from '../src/components/Card';
import { render, screen } from '@testing-library/react';
// Test suite for Card component
describe('Card', () => {
	// Test case to check if all the necessary information is rendered
	it('should render the name, image, category, and description', () => {
		const props = {
			name: 'Burger',
			image: 'burger.jpg',
			category: 'Fast Food',
			description: 'A delicious burger',
		};
		// Render the Card component with the given props
		render(<Card {...props} />);
		// Check if the name, image, category, and description are rendered correctly
		expect(screen.getByText('Burger')).toBeInTheDocument();
		expect(screen.getByAltText('Burger')).toHaveAttribute('src', 'burger.jpg');
		expect(screen.getByText('Fast Food')).toBeInTheDocument();
		expect(screen.getByText('A delicious burger')).toBeInTheDocument();
	});
	// Test case to check if a default image is rendered if no image is provided
	it('should render a default image if no image is provided', () => {
		const props = {
			name: 'Burger',
			category: 'Fast Food',
			description: 'A delicious burger',
		};
		// Render the Card component with the given props
		render(<Card {...props} />);
		// Check if the default image is rendered
		expect(screen.getByAltText('Burger')).toHaveAttribute(
			'src',
			'./images/default.png'
		);
	});
});
