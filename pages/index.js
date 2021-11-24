import { getProductsInCollection } from "../lib/shopify"
import { getArticleInBlog } from "../lib/shopify"
import ProductList from "../components/ProductList"
import ArticleList from "../components/ArticleList"

export default function Home( {products,articles} ) {
  //console.log(products)
  //console.log(articles)
  return (
    <>
    <div className='text-4xl'>
      <ProductList products={products} />
    </div>
    <div className='text-4xl'>
         <ArticleList articles={articles} /> 
    </div>
      </>
  ) 
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  const articles = await getArticleInBlog()
  return {
    props: {products,articles}, // will be passed to the page component as props
  }
}


