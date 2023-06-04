import { render, screen, fireEvent } from '@testing-library/react';
import ProductPage from './ProductPage';
describe('ProductPage', () => {
	it('displays the burger name', () => {
		render(<ProductPage />);
		expect(screen.getByText('Burger Name')).toBeInTheDocument();
	});
	it('displays the burger image', () => {
		render(<ProductPage />);
		expect(screen.getByAltText('Burger Name')).toBeInTheDocument();
	});
	it('displays the burger category', () => {
		render(<ProductPage />);
		expect(screen.getByText('Burger Category')).toBeInTheDocument();
	});
	it('displays the burger price', () => {
		render(<ProductPage />);
		expect(screen.getByText('$10.00')).toBeInTheDocument();
	});
	it('displays the burger description', () => {
		render(<ProductPage />);
		expect(screen.getByText('Burger Description')).toBeInTheDocument();
	});
	it('displays the burger ingredients', () => {
		render(<ProductPage />);
		expect(screen.getByText('Ingredients:')).toBeInTheDocument();
		expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
		expect(screen.getByText('Ingredient 2')).toBeInTheDocument();
	});
	it('displays the burger nutrients', () => {
		render(<ProductPage />);
		expect(screen.getByText('Nutrients:')).toBeInTheDocument();
		expect(screen.getByText('Calories: 500')).toBeInTheDocument();
		expect(screen.getByText('Protein: 20g')).toBeInTheDocument();
		expect(screen.getByText('Carbs: 50g')).toBeInTheDocument();
		expect(screen.getByText('Fat: 10g')).toBeInTheDocument();
	});
	it('allows the user to select a quantity', () => {
		render(<ProductPage />);
		const quantityInput = screen.getByLabelText('Quantity:');
		fireEvent.change(quantityInput, { target: { value: '2' } });
		expect(quantityInput.value).toBe('2');
	});
	it('adds the item to the cart when "Add to Cart" is clicked', () => {
		const setCart = jest.fn();
		render(<ProductPage setCart={setCart} />);
		const addToCartButton = screen.getByText('Add to Cart');
		fireEvent.click(addToCartButton);
		expect(setCart).toHaveBeenCalledWith([
			{ id: 1, name: 'Burger Name', price: 10, quantity: 1 },
		]);
	});
	it('navigates to the home page when "Go to Home Page" is clicked', () => {
		const history = { push: jest.fn() };
		render(<ProductPage history={history} />);
		const goToHomePageButton = screen.getByText('Go to Home Page');
		fireEvent.click(goToHomePageButton);
		expect(history.push).toHaveBeenCalledWith('/');
	});
	it('adds the item to the user\'s favorites when "Add Favorite" is clicked', async () => {
		const getUserId = jest.fn().mockResolvedValue('123');
		const addFavorite = jest.fn();
		render(<ProductPage getUserId={getUserId} addFavorite={addFavorite} />);
		const addFavoriteButton = screen.getByText('Add Favorite');
		fireEvent.click(addFavoriteButton);
		expect(getUserId).toHaveBeenCalled();
		expect(addFavorite).toHaveBeenCalledWith('123', 1);
	});
});
