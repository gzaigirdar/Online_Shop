import OrderTable from "./OrderTable";
import { Order_provider } from "@/components/context/Order_context";

function DashOrder() {
    return (  <div className="flex flex-col m-5  ">
    <Order_provider>
    <OrderTable />
    
    </Order_provider>
    </div>);
}

export default DashOrder;