import { Layout } from 'antd';
import Article from "./components/Article";

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Article />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default App;
