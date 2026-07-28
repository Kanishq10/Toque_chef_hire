import { IoRestaurant } from "react-icons/io5";
import { TbBowlChopsticksFilled } from "react-icons/tb";

export function NotificationBanner() {
  return (
    <div className="bg-orange-50 text-center py-2.5 px-4">
      <p className="text-sm md:text-base font-medium text-gray-800 flex items-center justify-center gap-2">
        <TbBowlChopsticksFilled className="text-orange-500 text-xl" />
        <span className="text-orange-500 text-md font-semibold">
        Now get a cook for one time in Delhi, Gurgaon & Bangalore!
        </span>
      </p>
    </div>
  );
}