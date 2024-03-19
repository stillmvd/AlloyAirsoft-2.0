import React, { FC, ReactElement } from "react";

export const LogForm: FC = (): ReactElement => {
    return (
        <>
            <div className="loginContainer">
                <form action="" className="loginForm">
                    <input
                        type="text"
                        name="Username"
                        className="loginForm_input"
                    />
                    <input
                        type="email"
                        name="Email"
                        className="loginForm_input"
                    />
                    <input
                        type="password"
                        name="Password"
                        className="loginForm_input"
                    />
                </form>
            </div>
        </>
    );
};
