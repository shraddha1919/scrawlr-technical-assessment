import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import UpvoteList from '../UpvoteList';

describe('UpvoteList', () => {
  const mockProps = {
    item: { id: 1, selected: false },
    changeHandler: jest.fn()
  }
  let plusButton = HTMLElement

  it('should add an upvote item in upvote list container on click of plus icon. should toggle upvote select state on click of upvote item', () => {
    const setSelectedMock = jest.fn()
    const useStateMock = () => [useState, setSelectedMock]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    
    render(
      <UpvoteList {...mockProps} />
    )

    plusButton = screen.getByTestId('plus-button')
    fireEvent.click(plusButton)
    const upvoteButton = screen.getByTestId('upvote-group-1-button-0')
    expect(upvoteButton).toBeDefined()

    fireEvent.click(upvoteButton)
    expect(upvoteButton).toHaveClass('upvote-container upvote-selected');
    
    fireEvent.click(upvoteButton)
    expect(upvoteButton).toHaveClass('upvote-container upvote-unselected');
  });
});
