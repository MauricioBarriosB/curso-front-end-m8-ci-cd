import { render } from "@testing-library/react";

import AppointmentsList from "../src/components/AppointmentsList";

const mockAppointments = [{
    "id": 1,
    "name": "string",
    "email": "string",
    "date": "string",
    "doctor": "string",
    "desc": "string",
    "status": "string"
}];

const mockEvent = jest.fn();

describe('Componente AppointmentsList: pruebas unitarias', () => {
    test('Componente debe cumplir con las props por defecto', () => {
        render(<AppointmentsList appoMsg='string' appointments={mockAppointments}  roles='string' methodDelete={mockEvent} methodEdit={mockEvent} methodPatch={mockEvent}        />)
        expect(true).toBeTruthy()
    })
})

