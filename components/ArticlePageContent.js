import Image from 'next/image'


export default function ArticlePageContent({article}) {
    console.log(article)
    return (
        <div>
            {article.title}
        </div>
    )
}
