import { logout } from "../../utils/helper";

const Logout = () => {
    return (
        <button className='btn' style={{padding:"10px 15px", backgroundColor: "red",color:"white", borderRadius:"9px",border:"none",cursor:"pointer"}} onClick={logout}>
            Logout
        </button>
    );
};

export default Logout;