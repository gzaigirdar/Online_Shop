import DeleteUser from "./DeleteUser";
import ChangeStatus from "./ChangeStatus";
import UpdatePassword from "./UpadatePassword";
function UserAction() {
    return (  
        <div className=" ">
            <div> 
              
                <DeleteUser />
            </div>
            <div>
                <ChangeStatus />
            </div>
            <div>
                <UpdatePassword />
            </div>

        </div>
    );
}

export default UserAction;