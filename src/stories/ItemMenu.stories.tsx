import {Meta, StoryObj} from "@storybook/react"
import { Component } from "react"
import { withRouter } from 'storybook-addon-react-router-v6';

import ItemMenu from "../components/ItemMenu"

export default {
    title : "Components/Item Menu",
    component: ItemMenu,
    args:{
        item: "Home",
        urlIcon: "../../public/icons/menu/home_dark.png"
    },
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/profile',
        routeParams: { },
      }
    }
}

export const Default = {}

export const Seleted = {
    args:{
        item: "Home",
        urlIcon: "../../public/icons/menu/home.png"
    }
}