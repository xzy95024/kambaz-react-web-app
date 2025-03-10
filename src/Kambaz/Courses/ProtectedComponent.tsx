import { useSelector } from "react-redux";

const ProtectedComponent = ({ role, children }: { role: string; children: any }) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return currentUser?.role === role ? children : null;
};

export default ProtectedComponent;