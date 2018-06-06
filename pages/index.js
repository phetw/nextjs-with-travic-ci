import { Fragment } from "react"
import Layout from "../components/Layout"
import Link from "next/link"

const Index = () => (
  <Fragment>
    <h1>My Blog</h1>
    <p>Welcome to Next.js!</p>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Fragment>
)

const PostLink = props => (
  <li>
    <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <Index />
  </Layout>
)
