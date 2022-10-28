import {Meta, StoryObj} from "@storybook/react"
import Button, {buttonPropos} from "../components/Button"

export default {
    title: "Components/Botão",
    component: Button,

    args : {
        content : "Tweet",
        class: "button_menuLateral"
    }
}as Meta <buttonPropos>

export const BotaoPrimario = {}

export const BotaoSecundario = {
    args : {   
        class : "btn_follow"
    }
}as Meta <buttonPropos>