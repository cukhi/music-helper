import React from 'react';
import {render,fireEvent,waitFor} from '@testing-library/react'
import App from '../App';

jest.mock('./api', () =>({
    fetchRecommendation: jest.fn(() => Promise.resolve({recommendedMusic: 'Mock music'})),
}));

describe('App component', () =>{
    it('should render the app and submit the from', async () =>{
        const {getByLabelText,getByText} = render(<App/>)

        fireEvent.change(getByLabelText('Favourite Artist'), { target: { value: 'Test Artist' } });
        fireEvent.change(getByLabelText('Favourite Genre'), { target: { value: 'Test Genre' } });
        fireEvent.change(getByLabelText('Personality Type'), { target: { value: 'ISTJ' } });
    
        fireEvent.click(getByText('Submit'));
    
        // Wait for the API call to complete
        await waitFor(() => expect(getByText('Mock Music')).toBeInTheDocument());
    })
})