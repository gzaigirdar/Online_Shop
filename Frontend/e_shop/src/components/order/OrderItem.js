function OrderItem() {
    return (
        <div className="container m-auto max-w-xlg bg-gray-800 text-white">
            <div className="mt-8 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-white">Customer’s Cart</p>
                        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">Premium Quality Dress</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-white"><span className="text-gray-400">Style: </span> Italic Minimal Design</p>
                                        <p className="text-sm leading-none text-white"><span className="text-gray-400">Size: </span> Small</p>
                                        <p className="text-sm leading-none text-white"><span className="text-gray-400">Color: </span> Light Blue</p>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6 text-white">$36.00 <span className="text-red-300 line-through">$45.00</span></p>
                                    <p className="text-base xl:text-lg leading-6 text-white">01</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-white">$36.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;

