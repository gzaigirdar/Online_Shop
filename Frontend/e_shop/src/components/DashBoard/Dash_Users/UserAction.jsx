import DeleteUser from "./DeleteUser";
import ChangeStatus from "./ChangeStatus";
import UpdatePassword from "./UpdatePassword";
function UserAction({user,closeFunc}) {
    let status = user.status ? 'Admin' : "Regular User";
    return (  
        <div className=" ">
            <div> 
              
                <DeleteUser name={user.name} id={user._id} status={status} close={closeFunc}/>
            </div>
            <div>
                <ChangeStatus acc_type={user.Admin} id={user._id} name={user.name}/>
            </div>
            <div>
                <UpdatePassword name={user.name} id={user._id}/>
            </div>

        </div>
    );
}

export default UserAction;