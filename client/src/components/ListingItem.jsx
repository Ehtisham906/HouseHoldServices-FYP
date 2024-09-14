import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'

export default function ListingItem({ listing }) {
    return (
        <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[320px]'>
            <Link to={`/listing/${listing._id}`}>
                <img src={listing.imageUrls[0] || "https://assets.everspringpartners.com/dims4/default/d8ffe4b/2147483647/strip/true/crop/1600x600+0+0/resize/2134x800!/format/webp/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fd7%2Fc7%2F497029a34adaa52d0a7510ba9679%2Fheader-lo-res-0006-wm-shoot-2074.jpg.jpg"} alt="listing image" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' />
                <div className="p-3 flex flex-col gap-2 w-full">
                    <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
                    <div className='flex items-center gap-1'>
                        <MdLocationOn className='h-4 w-4 text-green-700' />
                        <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
                    </div>
                    <p className='text-sm text-grey-600 line-clamp-2'>
                        {listing.description}</p>

                    <p className='text-slate-500 mt-2 font-semibold '>
                        $
                        {listing.offer
                            ? listing.discountPrice : listing.regularPrice}
                        {listing.type === 'rent' && '/month'}
                    </p>
                    <div className="text-slate-700 flex gap-4">
                        <div className="font-bold text-xs">
                            {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bedrooms} Bed`}
                        </div>
                        <div className="font-bold text-xs">
                            {listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : `${listing.bathrooms} bath`}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
