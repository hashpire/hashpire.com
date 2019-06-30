import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon
} from 'semantic-ui-react';
import MenuConfig from '../Config/menuConfig';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }} id='footer'>
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='เมนู' />
          <List link inverted>
            { props.menuConfig.map((item, index) => {
                return (
                  <List.Item key={index} as={Link} to={item.path}>{item.name}</List.Item>
                );
              })
            }
          </List>
        </Grid.Column>
        {/* <Grid.Column width={5} verticalAlign='middle'>
          <Header inverted as='h4' content='โซเชียลมีเดีย' />
          <Icon name='github' size='large' link/>&nbsp;
          <Icon name='twitter' size='large' />&nbsp;
          <Icon name='facebook' size='large' />&nbsp;
          <Icon name='medium' size='large' />&nbsp;
          <Header inverted as='h4' content='ชุมชน' />
          <Icon name='telegram' size='large' />&nbsp;
        </Grid.Column> */}
        <Grid.Column width={5} verticalAlign='middle'>
          <Header inverted as='h3' content='เกี่ยวกับเรา' />
          <p>
            Hashpire.com เป็นชุมชนของผู้ที่ชื่นชอบเทคโนโลยี web3 อาทิ บล็อกเชนและการจัดเก็บข้อมูลแบบกระจายอำนาจ ภารกิจของเราคือการพลักดันวิสัยทัศน์ของ Web3 ให้เป็นจริง และ สร้างแรงบันดาลใจให้โลกได้รู้เกี่ยวกับพลังแห่ง HASH
          </p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <Image centered size='mini' src='assets/images/icon.png' />
      <List horizontal inverted divided link size='small'>
        <List.Item as={Link} to='/contact'>
          ติดต่อเรา
        </List.Item>
        <List.Item>
          ข้อกำหนดและเงื่อนไข
        </List.Item>
        <List.Item>
          นโยบายความเป็นส่วนตัว
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer;