import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add numbers together', () => {
    const button4 = container.getByTestId("number4")
    fireEvent.click(button4)
    const buttonAdd = container.getByTestId("operator-add")
    fireEvent.click(buttonAdd)
    const button1 = container.getByTestId("number1")
    fireEvent.click(button1)
    const buttonEquals = container.getByTestId("operator-equals")
    fireEvent.click(buttonEquals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("5")
    })

  it("should be able to subtract numbers", () => {
    const button7 = container.getByTestId("number7")
    fireEvent.click(button7)
    const buttonSubtract = container.getByTestId("operator-subtract")
    fireEvent.click(buttonSubtract)
    const button4 = container.getByTestId("number4")
    fireEvent.click(button4)
    const buttonEquals = container.getByTestId("operator-equals")
    fireEvent.click(buttonEquals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("3")
    })

  it("should be able to multiply numbers", () => {
    const button3 = container.getByTestId("number3")
    fireEvent.click(button3)
    const buttonMultiple = container.getByTestId("operator-multiply")
    fireEvent.click(buttonMultiple)
    const button5 = container.getByTestId("number5")
    fireEvent.click(button5)
    const buttonEquals = container.getByTestId("operator-equals")
    fireEvent.click(buttonEquals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("15")
    })

  it("should be able to divide numbers", () => {
    const button2 = container.getByTestId("number2")
    fireEvent.click(button2)
    const button1 = container.getByTestId("number1")
    fireEvent.click(button1)
    const buttonDivide = container.getByTestId("operator-divide")
    fireEvent.click(buttonDivide)
    const button7 = container.getByTestId("number7")
    fireEvent.click(button7)
    const buttonEquals = container.getByTestId("operator-equals")
    fireEvent.click(buttonEquals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("3")
  })

  it("should be able to concatenate multiple number button clicks", () => {
    const button7 = container.getByTestId("number7")
    fireEvent.click(button7)
    const button2 = container.getByTestId("number2")
    fireEvent.click(button2)
    const button3 = container.getByTestId("number3")
    fireEvent.click(button3)
    const button8 = container.getByTestId("number8")
    fireEvent.click(button8)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("7238")
  })

  it("should be able to chain multiple operations together", ()=> {
    const button4 = container.getByTestId("number4")
    fireEvent.click(button4)
    const buttonAdd = container.getByTestId("operator-add")
    fireEvent.click(buttonAdd)
    const button1 = container.getByTestId("number1")
    fireEvent.click(button1)
    const button7 = container.getByTestId("number7")
    fireEvent.click(button7)
    const buttonSubtract = container.getByTestId("operator-subtract")
    fireEvent.click(buttonSubtract)
    const button5 = container.getByTestId("number5")
    fireEvent.click(button5)
    const buttonMultiple = container.getByTestId("operator-multiply")
    fireEvent.click(buttonMultiple)
    const button2 = container.getByTestId("number2")
    fireEvent.click(button2)
    const buttonEquals = container.getByTestId("operator-equals")
    fireEvent.click(buttonEquals)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("32") //calculator doesn't follow BODMAS!
  })

  it("should be able to clear the running total without affecting the calculation", () => {
    const button2 = container.getByTestId("number2")
    fireEvent.click(button2)
    const button4 = container.getByTestId("number4")
    fireEvent.click(button4)
    const buttonAdd = container.getByTestId("operator-add")
    fireEvent.click(buttonAdd)
    const button7 = container.getByTestId("number7")
    fireEvent.click(button7)
    const buttonSubtract = container.getByTestId("operator-subtract")
    fireEvent.click(buttonSubtract)
    const button3 = container.getByTestId("number3")
    fireEvent.click(button3)
    const buttonClear = container.getByTestId("clear") //clear button 
    fireEvent.click(buttonClear)
    const button1 = container.getByTestId("number1")
    fireEvent.click(button1)
    const buttonMultiple = container.getByTestId("operator-multiply")
    fireEvent.click(buttonMultiple)
    const runningTotal = container.getByTestId('running-total')
    expect(runningTotal.textContent).toEqual("30")
  })

})


