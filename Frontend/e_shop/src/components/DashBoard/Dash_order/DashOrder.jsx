import OrderTable from "./OrderTable";
import { Order_provider } from "@/components/context/Order_context";

function DashOrder() {
    return (  
    <Order_provider>
    <OrderTable />
    
    </Order_provider>
    );
}

export default DashOrder;