import Image from 'next/image'


export default function ArticlePageContent({article}) {

    return (
        <div>
            {article.title}
        </div>
    )
}
