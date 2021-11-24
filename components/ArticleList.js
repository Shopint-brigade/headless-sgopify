import  ArticleCard  from "./ArticleCard"


const ArticleList = ({articles}) => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className='text-2xl font-extrabold text-gray-900 mb-6'>
                 Featured Blog 
                </h2>
                <div className='grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-4'>
                    {
                        articles.map(article => (
                            <ArticleCard key={article.node.id} article={article} />
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ArticleList
