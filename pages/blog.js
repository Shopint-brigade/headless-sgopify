import { getProductsInCollection } from "../lib/shopify"
import { getArticleInBlog } from "../lib/shopify"
import ArticleList from "../components/ArticleList"
import Head from "next/head"
export default function Home( {articles} ) {

  return (
 
   
  <div>
      <Head>
        <title>829 Blog Page </title>
        <meta name="description" content= "Blog page - Modern headless ecomm solution focusing on Shopify , Next.js , TailwindCss , GraphQL uses storefront API , static site generation , getStaticPaths , GetStaticProps and more." />
        <meta property="og:title" content="829 Headless Shopify store wireframe blog page " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.829llc.com" />
        <meta property="og:image" content="https://www.829llc.com/wp-content/uploads/2016/08/829Studios.png" />
        <meta property="og:description"   content="Modern headless ecomm solution focusing on Shopify , Next.js , TailwindCss , GraphQL uses storefront API , static site generation , getStaticPaths , GetStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="829llc Sample Wireframe" />
      </Head>

      <ArticleList articles={articles} /> 
  </div>

      
  ) 
}

export async function getStaticProps() {
  const articles = await getArticleInBlog()
  return {
    props: {articles}, // will be passed to the page component as props
  }
}


