import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import MenuLateral from '../pages/principal/Menulateral';

export default{
    title: "Components/Menu",
    component: MenuLateral,

    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: '/profile',
        routeParams: { },
      }
    }
}

export const Default =  {}