import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import Create from '../pages/create';

const URL = "https://images.pexels.com/photos/2828082/pexels-photo-2828082.jpeg?auto=compress&cs=tinysrgb&w=600"

describe("formTests", ()=>{
    it("Deberia renderizar la cantidad correcta de errores", async()=>{
        render(<Create />)
        userEvent.click(screen.getByRole("button"))

        expect(await screen.findAllByRole("alert")).toHaveLength(2);
    })
    describe("Deberia retornar un error", ()=>{
        it("cuando se supere el maximo de caracteres", async()=>{
            render(<Create />)
            userEvent.type(screen.getByRole("textbox", { name: /name/i }), 
            "nombrelargoconposiblementemasdeveintecaracteres")
            userEvent.type(screen.getByRole("textbox", { name: /image/i }), URL)

            userEvent.click(screen.getByRole("button"))

            expect(await screen.findAllByRole("alert")).toHaveLength(1);
        })
        it("cuando se supere la regex no matchee", async()=>{
            render(<Create />)
            userEvent.type(screen.getByRole("textbox", { name: /name/i }), "Paulina Cocina Vol.II")
            userEvent.type(screen.getByRole("textbox", { name: /image/i }), "imagen-que-no-matchea")

            userEvent.click(screen.getByRole("button"))

            expect(await screen.findAllByRole("alert")).toHaveLength(1);
        })
    })
})