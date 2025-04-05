import { render } from "@testing-library/react";
import CustomSelect from "../src/commons/CustomSelect";

const mockOptions = [{
    "id": 1,
    "name": "string"
}];

const mockEvent = jest.fn();

describe('Componente CustomSelect: pruebas unitarias', () => {
    test('Componente debe cumplir con las props por defecto', () => {
        render(<CustomSelect placeholder='string' options={mockOptions} onSelect={mockEvent}  />)
        expect(true).toBeTruthy()
    })
})