function OrderItem({item}) {

    return (
        <div className="bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-24 lg:w-32 pb-4 md:pb-0">
                    <img className="w-full rounded" src={item.img_link} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">Type: {item.type}</p>
                    <div className="flex justify-between mt-2">
                        <span className="text-white">Qty: {item.quantity}</span>
                        <span className="text-white font-semibold">${item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;