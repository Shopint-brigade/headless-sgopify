import Link from 'next/link'
import Image from 'next/image'


const ArticleCard = ({article}) => {
    const { title , excerpt , handle } = article.node
    const{ altText , originalSrc } = article.node.image
    return (
    <Link 
        href={`/articles/${handle}`}
    >
            <a className='group'>
                <div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
                    <div className='relative group-hover:opacity-75 h-72'>
                        <Image 
                                src={originalSrc}
                                alt={altText}
                                layout='fill'
                                objectFit='cover'
                            /> 
                    </div>
                </div>
                <h3 className='mt-4 text-lg font-medium text-gray-900'>{title}</h3>
                <p className='mt-4 text-sm text-gray-700'>{excerpt}</p>
              
            </a>
       </Link>
    )
}

export default ArticleCard