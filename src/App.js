import { Layout } from 'antd';
import Article from "./components/Article/Article";

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <>
            <Layout>
                <Header className="header">The Blog</Header>
                <Content>
                    <Article />
                </Content>
            </Layout>
        </>
    );
}

export default App;
