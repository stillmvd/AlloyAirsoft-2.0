import React, { FC, ReactElement } from "react";
import { Dropdown, ConfigProvider, theme } from "antd";
import "antd/dist/antd.js";
import { items } from "../const/config";

export const PersonalAccount: FC = (): ReactElement => (
    <ConfigProvider
        theme={{
            token: {
                borderRadius: 8,
                paddingContentHorizontal: 20,
            },
            algorithm: theme.darkAlgorithm,
        }}>
        <Dropdown menu={{ items }} placement="bottom">
            <img src="/img/account.svg" alt="Account" className="user" />
        </Dropdown>
    </ConfigProvider>
);
