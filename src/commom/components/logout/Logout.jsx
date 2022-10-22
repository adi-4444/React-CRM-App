import { logout } from "../../utils/helper";

const Logout = () => {
    return (
        <button className='btn' style={{padding:"15px 8px", color: "red", borderRadius:"9px"}} onClick={logout}>
            Logout
        </button>
    );
};

export default Logout;