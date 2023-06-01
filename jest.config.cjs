module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
