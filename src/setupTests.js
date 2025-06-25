// setupTests.js

// Import Jest DOM extensions for better assertions in testing
import '@testing-library/jest-dom/extend-expect';

// Optional: Polyfill for matchMedia (used in responsive components)
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  };
};

// Optional: Mock IntersectionObserver if you're using it for lazy loading or animations
class IntersectionObserver {
  constructor() {}

  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IntersectionObserver;

// Optional: Set up any global mocks or spies here
jest.mock('./services/api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'mocked' }))
}));
