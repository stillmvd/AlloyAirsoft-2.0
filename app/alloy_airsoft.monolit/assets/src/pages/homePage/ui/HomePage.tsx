import React, { FC, ReactElement } from "react";
import { Header } from "widgets/Header";

const HomePage: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
                <div className="pageContainer">
                    <h1>Our brand new event</h1>
                    <div className="eventContainer">
                        <div className="eventContainer_image">
                            <img
                                src="/img/summerhunt.svg"
                                alt="Summer Hunt game"
                            />
                        </div>
                        <div className="eventContainer_info">
                            <p>
                                Bring your weapons and get ready for the summer
                                hunt!
                            </p>
                            <ul className="info">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
