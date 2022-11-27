import {Outlet} from "react-router-dom";
import {Layout} from "antd";
const { Header, Content } = Layout;

function AppLayout(){
    return (
        <Layout>
            <Header className="header">The Blog</Header>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )
}

export default AppLayout