import {Meta, StoryObj} from "@storybook/react"
import { Component } from "react"

import ItemMenu from "../components/ItemMenu"

export default {
    title : "Components/Item Menu",
    component: ItemMenu,
    args:{
        item: "Home",
        urlIcon: "../../public/icons/menu/home_dark.png"
    }
}

export const Default = {}

export const Seleted = {
    args:{
        item: "Home",
        urlIcon: "../../public/icons/menu/home.png"
    }
}