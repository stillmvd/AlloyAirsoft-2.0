import { FC, ReactElement } from "react";
import { Header } from "../../../widgets/Header";
import { LogForm } from "../../../app/features/UserAccess/ui/LogForm";

const UserAccessLog: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <div>
                <LogForm />
            </div>
        </>
    );
};

export default UserAccessLog;
