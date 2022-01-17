import '../styles/globals.css';
import Layout from '../components/layout/Layout'

function TestApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default TestApp;
