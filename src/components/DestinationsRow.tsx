import DestinationCard from "./DestinationCard"
import { Destination } from "../types"
import { ArrowLeft, ArrowRight } from "lucide-react"
const DestinationsRow = ({ destinations }: { destinations: Destination[] }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 py-4 px-2 no-scrollbar">
        {destinations.map((destination, index) => (
          <div key={index} className="snap-center flex-shrink-0 w-[200px] md:w-[300px]">
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 hidden md:block"
        onClick={(e) => {
          const container = e.currentTarget.parentElement?.querySelector('div');
          container?.scrollBy({ left: -300, behavior: 'smooth' });
        }}
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 hidden md:block"
        onClick={(e) => {
          const container = e.currentTarget.parentElement?.querySelector('div');
          container?.scrollBy({ left: 300, behavior: 'smooth' });
        }}
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default DestinationsRow