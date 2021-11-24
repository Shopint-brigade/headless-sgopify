import { getArticleInBlog } from "../../lib/shopify"
import { getArticleByHandle } from "../../lib/shopify"
import ArticlePageContent from "../../components/ArticlePageContent"

export default function ArticlePage({ article }) {
    return (
        <div>
            <ArticlePageContent article={article}/>
        </div>
    )
}

/* whitelisting all blog paths to be pre-rendered*/
export async function getStaticPaths() {
    const articles = await getArticleInBlog()

    const paths = articles.map( item => {
        const article = String(item.node.handle)
        return{
            params : { article }
        }
    })
    return {
      paths: paths,
      fallback: false
    }
  }
  

  export async function getStaticProps({params}) {
    const article = await getArticleByHandle(params.article)
    return {
      props: {article}, // will be passed to the page component as props
    }
  }