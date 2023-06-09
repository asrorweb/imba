export const CourseInfo = () => {
    return (
        <div className="min-h-screen mt-[100px] max-md:mt-[80px]">
            <div className="container py-9 mx-auto xl:px-10 max-xl:px-0 max-md:px-4">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex flex-col justify-center">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                We invest in the world’s potential
                            </h1>
                            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                Here at Flowbite we focus on markets where
                                technology, innovation, and capital can unlock
                                long-term value and drive economic growth.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                >
                                    Get started
                                    <svg
                                        aria-hidden="true"
                                        className="ml-2 -mr-1 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://martech.org/wp-content/uploads/2014/09/video-play-button-ss-1920-800x450.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
