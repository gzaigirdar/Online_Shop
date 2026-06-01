import InvTable from "./TableInv";
import { Inventory_provider } from "@/components/context/products_context";

function Inventory() {

    return (
        <>
            <Inventory_provider>
                <InvTable />
            </Inventory_provider>
        </>
      );
}

export default Inventory;
