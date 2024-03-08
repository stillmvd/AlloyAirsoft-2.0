import { FC, ReactElement } from "react";
import { Header } from "../../../widgets/Header";
import { RegForm } from "../../../app/features/UserAccess/ui/RegForm";

const UserAccessReg: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <div>
                <RegForm />
            </div>
        </>
    );
};

export default UserAccessReg;
