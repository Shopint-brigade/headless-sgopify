import { getProductsInCollection } from "../lib/shopify"
import { getArticleInBlog } from "../lib/shopify"
import ProductList from "../components/ProductList"
import ArticleList from "../components/ArticleList"
import Hero from "../components/Hero"
import Head from "next/head"
export default function Home( {products,articles} ) {

  return (
 
   
  <div className=''>
      <Head>
        <title>829 Headless Shopify store wireframe </title>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
        <meta http-equiv="Content-Type" content="text/html" charset="ISO-8859-1"/>
        <meta name="description" content= "Modern headless ecomm solution focusing on Shopify , Next.js , TailwindCss , GraphQL uses storefront API , static site generation , getStaticPaths , GetStaticProps and more." />
        <meta property="og:title" content="829 Headless Shopify store wireframe " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.829llc.com" />
        <meta property="og:image" content="https://www.829llc.com/wp-content/uploads/2016/08/829Studios.png" />
        <meta property="og:description"   content="Modern headless ecomm solution focusing on Shopify , Next.js , TailwindCss , GraphQL uses storefront API , static site generation , getStaticPaths , GetStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="829llc Sample Wireframe" />


      </Head>
      <Hero/>
      <ProductList products={products} />
      <ArticleList articles={articles} /> 
  </div>

      
  ) 
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  const articles = await getArticleInBlog()
  return {
    props: {products,articles}, // will be passed to the page component as props
  }
}


