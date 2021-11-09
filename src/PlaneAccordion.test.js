import {render, screen} from '@testing-library/react';
import PlaneAccordion from "./PlaneAccordion";

const plane =
    {
        tail: "N9741T",
        maintenanceItems: [
            {
                item: "Annual",
                last: "6/3/21",
                due: "6/30/22",
                daysRemaining: 234,
                hoursRemaining: "",
                comment: ""
            },
        ]
    }


test('renders an accordion for a plane', () => {

    render(<PlaneAccordion plane={plane}/>);
    const linkElement = screen.getByText(/N9741T/i);
    expect(linkElement).toBeInTheDocument();

});