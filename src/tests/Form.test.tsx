import React from "react";
import {render,fireEvent} from "@testing-library/react"
import Form from "../form";

describe('Form component', () =>{
    it('should render the form with initial values', () =>{
        const onSubmitMock = jest.fn();
        const {getByLabelText,getByText} = render(<Form onSubmit={onSubmitMock} />);
        
        expect(getByLabelText('Favourite Artist')).toBeInTheDocument();
        expect(getByLabelText('Favourite Genre')).toBeInTheDocument();
        expect(getByLabelText('Personality Type')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();

    });
    it('should submit the form with user input', () =>{
        const onSubmitMock = jest.fn();
        const {getByLabelText,getByText} = render(<Form onSubmit={onSubmitMock} />);

        fireEvent.change(getByLabelText('Favourite Artist'), {target:{value:'Test Artist'}});
        fireEvent.change(getByLabelText('Favourite Genre'), {target:{value:'Test Genre'}});
        fireEvent.change(getByLabelText('Personality Type'), {target:{value:'ISTJ'}});

        fireEvent.click(getByText('Submit'));

        expect(onSubmitMock).toHaveBeenCalledWith({
            favouriteArtist: 'Test Artist',
            favouriteGenre: 'Test Genre',
            personalityType: 'ISTJ',
          });
    })
    
})