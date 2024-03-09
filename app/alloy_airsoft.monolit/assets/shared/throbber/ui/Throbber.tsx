import React, {FC, ReactElement} from "react";
// Вот так должно импортироваться в файле, но оно не работает тебе нужно будет разобраться
// import '../styles/index.scss';

const Throbber: FC = (): ReactElement => {
    return (
        <div className="throbber-container">
            <div className="throbber"></div>
        </div>
    )
}

export default Throbber;