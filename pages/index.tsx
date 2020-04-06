import { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout title="homepage">
    <h1>Hello world! - user agent: {userAgent}</h1>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
