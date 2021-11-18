import Image from 'next/image'
import { formatter } from '../utils/helpers'

export default function ProductPageContent({product}) {
    return (
        <div>
            {product.title}
        </div>
    )
}
