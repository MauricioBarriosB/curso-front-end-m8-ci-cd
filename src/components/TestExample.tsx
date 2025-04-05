export function TestExample() {
    return (
        <>
            <h1>TestExample</h1>
        </>
    )
}

/*

// test\TestExample.test.tsx

import { TestExample } from '../src/components/TestExample'
import { render, screen } from "@testing-library/react"

describe('Test example', () => {
    test.('Debe renderizar el componente en pantalla', () => {
        render(<TestExample />)
        expect(true).toBeTruthy()

        const heading = screen.getByRole('heading') 
        expect (heading).toBeInTheDocument();
    })
})

*/