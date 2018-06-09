import { Fragment } from "react"
import Layout from "../components/Layout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const PostLink = props => (
  <ul>
    {props.shows.map(({ show }) => (
      <li key={show.id}>
        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
          <a>{show.name}</a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      li {
        list-style: circle;
        margin: 10px 0;
      }

      a {
        color: blue;
        font-family: "Courier";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </ul>
)

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <PostLink shows={props.shows} />
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
