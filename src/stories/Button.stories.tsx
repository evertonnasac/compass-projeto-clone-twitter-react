import {Meta, StoryObj} from "@storybook/react"
import Button, {buttonProps} from "../components/Button"

export default {
    title: "Components/Botão",
    component: Button,

    args : {
        content : "Tweet",
        height: "30px",
        width: "200px",
        kind: "primary"

    }
}as Meta <buttonProps>

export const BotaoPrimario = {}

export const BotaoSecundario = {
    args : {   
        border: "1px solid #1DA1F2",
        kind: "secondary"
    }
}as Meta <buttonProps>