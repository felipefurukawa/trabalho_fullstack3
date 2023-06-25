import { React , useState }from 'react';
import { Layout, Menu, Button } from 'antd';
import { LogoutOutlined} from '@ant-design/icons';


const { Header } = Layout;

export default function HeaderComponent () {
  
  return (
    <Header theme="dark" style={{ height: '100px' , overflowX: 'auto'}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '16px' , marginTop:"20px"}}>
          <img
            src="https://images.vexels.com/media/users/3/156289/isolated/preview/f3a1ffeb227d106046b96497a747b596-icone-de-reciclagem.png"
            alt="Logo"
            style={{ height: '50px', width: '50px' }}
          />
        </div>
        <Menu theme="dark" mode="incline" defaultSelectedKeys={['home']}>
          <Button style={{marginRight: 5}} href="/home">Home</Button>
          <Button style={{marginRight: 5}} href='/usuario/premios'>Meus Prêmios</Button>
          <Button style={{marginRight: 5}} href="/usuario/pontos">Meus Pontos</Button>
          <Button style={{marginRight: 5}} href="/premio">Cadastrar Prêmio</Button>  
          <Button style={{marginRight: 5}} href="/premio/lista">Listar Prêmios</Button>              
          <Button style={{marginRight: 5}} href="/premio/usuario">Atribuir Prêmios ao Usuário</Button>              
          <Button style={{marginRight: 5}} href="/usuario">Cadastrar novo Usuário</Button>              
        </Menu>

        <div style={{ display: 'flex', alignItems: 'rigth', marginLeft: 'auto' }}>
            <Button  href="/" style={{ color: 'white'}} icon={<LogoutOutlined style={{ color: 'white', fontSize:"20px"}}/>} type="text">
            Logout
            </Button>
        </div>
      </div>

    </Header>
  );
};