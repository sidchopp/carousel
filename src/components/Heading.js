import React from 'react'
import { Container, Header, Button, Image, Icon } from 'semantic-ui-react'

function Heading() {
  return (
    <Container textAlign='center' style={{ margin: '2rem' }}>
      <Header as='h2'>
        <Header.Content>My Recent Projects</Header.Content>
      </Header>
      <div>
        <a href="https://www.linkedin.com/in/sidchopp/" target="_blank" > <Icon inverted size='large' name='linkedin' circular />
        </a>
        <a href="https://github.com/sidchopp/carousel" target="_blank" > <Icon inverted size='large' name='github' circular />
        </a>
      </div>
    </Container>
  )
}

export default Heading
