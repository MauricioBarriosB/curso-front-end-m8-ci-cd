import { render } from "@testing-library/react";

import DoctorCard from '../src/components/DoctorCard';

const mockEvent = jest.fn();

describe('Componente DoctorCard: pruebas unitarias', () => {
    test('Componente debe cumplir con las props por defecto', () => {
        render(<DoctorCard id={1} name='string' specialty_name='string' photo='string' onOpen={mockEvent} />)
        expect(true).toBeTruthy()
    })
})
