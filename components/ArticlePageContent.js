import Image from 'next/image'


export default function ArticlePageContent({article}) {

    return (
        <> 
            <div className='max-w-xl m-auto block mt-10 mb-0'>
             <a href='/'>Home</a> <span> / </span> <a href='/blog'>Blog</a>
            </div>
            
            <div className='relative max-w-xl h-96 m-auto '>
                
                <Image
                    src={article.image.originalSrc}
                    alt={article.image.altText}
                    layout='fill'
                    objectFit='contain'
                    /> 
            </div>

            <div className='max-w-xl m-auto'>
                    <h1 className='text-5xl mb-10 mt-16'>{article.title}</h1>
                    <p>{article.content}</p>
            </div>
        </>
    )
}
