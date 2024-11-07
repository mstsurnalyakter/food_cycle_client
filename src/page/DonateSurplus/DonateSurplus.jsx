import React from 'react'
import NavigateLink from '../../components/NavigateLink';

const DonateSurplus = () => {
    const items = [
      {
        id: "1",
        title: "Add image upto 3",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
      {
        id: "2",
        title: "Add description",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
      {
        id: "3",
        title: "Add expiry",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
      {
        id: "4",
        title: "Add location",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
      {
        id: "5",
        title: "Add agent",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
      {
        id: "6",
        title: "Add image upto 3",
        icon: "https://i.postimg.cc/N0RhKZ3g/add.png",
      },
    ];
    return (
      <div className="mt-10 mb-16">
        <NavigateLink link="/home_page" />
        <h2 className="text-primary text-2xl font-semibold mt-2">FoodCycle</h2>
        <p className="font-medium mt-1">Donate Your Surplus</p>

        <div className="bg-secondary rounded-3xl px-10 py-10 mt-20 space-y-10 min-h-[calc(100vh-279px)]">
          <h2>Donate Now</h2>
          <div className="flex flex-col ">
            {items?.length &&
              items?.map((item) => (
                <div
                  className="border-b flex items-center border-primary justify-between py-3"
                  key={item?.id}
                >
                  <h2>{item?.title}</h2>
                  <div>
                    <img src={item?.icon} alt="" />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-primary px-4">Next</button>
          </div>
        </div>
      </div>
    );
}

export default DonateSurplus