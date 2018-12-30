import Layout from "../comps/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js" />
      <PostLink title="Deploy Next.js" />
    </ul>
  </Layout>
);
