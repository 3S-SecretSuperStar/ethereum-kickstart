import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style={{ marginTop: '10px'}}>
            <Menu.Item>
                CrowdCoin
            </Menu.Item>
            <Menu.Item position="right">
                Campaigns
            </Menu.Item>
            <Menu.Item>
                +
            </Menu.Item>
        </Menu>
    );
}