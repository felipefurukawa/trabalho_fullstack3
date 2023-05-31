
import './App.css';
import { Layout, Avatar, Menu } from 'antd'
import { LoadingOutlined, SmileOutlined, QqOutlined  } from '@ant-design/icons';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;



function App() {

  const rotas = createBrowserRouter([
    {
        path: "/",
        element: <h1>Ola</h1>
    },
      {
        path: "/usuario",
        element: <h1>Usuario</h1>
    },


    ]);
  

  const Conteudo = (props) => {
      return  <RouterProvider router={rotas} />
   }
   const ItemMenuSelecionado = (item) => {
      rotas.navigate(item.key);
   }


  return (

  <Layout style={{height: "100vh"}}>
    <Header>
      <Avatar icon={ <LoadingOutlined /> }
             style={{float: "right", marginTop: "15px"}}
      />
      <h1 style={{color: "gray", marginTop: "2px"}}>Header</h1>
    </Header>

  <Layout>
    <Sider>
      <Menu theme="dark" onClick={ItemMenuSelecionado}>
        <Menu.Item key="/usuario" icon={<SmileOutlined />} >Usuários</Menu.Item>
        <Menu.Item key="/pinguim" icon={<QqOutlined />} >Pinguins</Menu.Item>
      </Menu>
    </Sider>


    <Content>
      <Conteudo/>
    </Content>

    </Layout>
    <Footer>
      <h1>Rodape</h1>
    </Footer>
  </Layout>  
);

   

}

export default App;
