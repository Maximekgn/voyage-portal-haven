import { ArrowRight } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Destination } from '../types'
const DestinationCard = ({ destination }: { destination: Destination }) => {
    return (
        <div
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 h-[300px] w-[200px] md:h-[400px] md:w-[300px]"
        >
            <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-medium">
                        {destination.location}
                    </span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {destination.name}
                </h3>
                <p className="text-travel-200 mb-4">
                    {destination.description}
                </p>
                <Button
                    className="bg-white text-travel-800 hover:bg-travel-100"
                >
                    Découvrir
                    <ArrowRight className="ml-2" />
                </Button>
            </div>
        </div>
    )
}

export default DestinationCard