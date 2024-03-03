import React, { FC, ReactElement } from 'react';
import { Dropdown, MenuProps, ConfigProvider, theme } from 'antd';
import 'antd/dist/antd.js';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href='/login'>
          Sign in
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href='/registration'>
          Sign up
        </a>
      ),
    },
  ];

const User: FC = (): ReactElement => (
    <ConfigProvider
        theme={{
            token: {
                borderRadius: 8,
                paddingContentHorizontal: 20,
            },
            algorithm: theme.darkAlgorithm,
        }}
    >
        <Dropdown menu={{ items }} placement="bottom">
            <img src='/img/account.svg' alt='Account' className='user' />
        </Dropdown>
    </ConfigProvider>
);

export default User;