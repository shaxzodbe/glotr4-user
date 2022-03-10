import React from 'react';

const Recently = () => {
    return (
        <div>
            <h1>Recently Played</h1>
            <div className="m-2 h-32 carousel rounded-box">
                <div className="carousel-item card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm text-lg-base">Shoes!</h2>
                        <p className="leading-none text-sm">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" className="w-full"
                         alt="Tailwind CSS Carousel component" />
                </div>
            </div>

        </div>
    );
};

export default Recently;
