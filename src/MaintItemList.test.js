import {render, screen} from '@testing-library/react';
import MaintItemList from "./MaintItemList";

const maintenanceItems = [
    {
        item: "Annual",
        last: "6/3/21",
        due: "6/30/22",
        daysRemaining: 234,
        hoursRemaining: "",
        comment: ""
    },
    {
        item: "ELT Battery Change",
        last: "6/3/21",
        due: "6/30/23",
        daysRemaining: 570,
        hoursRemaining: "",
        comment: "Remote 3/26"
    },
    {
        item: "Airworthiness Directive",
        link: "https://www.federalregister.gov/documents/2017/09/19/2017-16048/airworthiness-directives-ameri-king-corporation-emergency-locator-transmitters",
        last: "6/3/21",
        due: "6/30/22",
        daysRemaining: 234,
        hoursRemaining: "",
        comment: "Ameriking ELT - At Annual"
    },
]

test('renders a table of maintenance items', () => {

    render(<MaintItemList maintList={maintenanceItems}/>);
    const linkElement = screen.getByText(/ELT/i);
    expect(linkElement).toBeInTheDocument();

});