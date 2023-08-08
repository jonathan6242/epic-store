import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as EmptyStarIcon } from "@heroicons/react/24/outline"

function Rating() {
  return (
    <div className="flex items-center -ml-0.5">
      {Array.from({ length: 4 }).map((_, index) => (
        <StarIcon key={index} className="w-5 h-5 flex-shrink-0 text-yellow-400" />
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <EmptyStarIcon key={index} className="w-5 h-5 flex-shrink-0 text-yellow-400" />
      ))}
    </div>
  )
}
export default Rating