import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { fileReducer } from '../store/slices'
import Home from '../pages/index'

// A function to create a test store
function createTestStore() {
  const store = configureStore({
    reducer: {
        file: fileReducer,
    }
});
  return store;
}


let store;
describe('AI Labs Tests', () => {
  // Creates the test store before each test case runs
  beforeEach(() => {
    store = createTestStore()
  })

  it('Heading present', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    // Gets a reference to the DOM element
    const heading = getByTestId('heading')
    // Making assertion that this DOM node is in the document
    expect(heading).toBeInTheDocument()
  })

  it('Upload Button present', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    // Gets a reference to the input DOM element
    const button = getByTestId('upload-button')
    // Making assertion that this DOM node is in the document
    expect(button).toBeInTheDocument()
  })

  it('Data Table present', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    // Gets a reference to the div element wrapping the table
    const heading = getByTestId('table-data')
    // Making assertion that this DOM node is in the document
    expect(heading).toBeInTheDocument()
  })
})