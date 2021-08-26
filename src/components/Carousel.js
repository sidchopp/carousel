import { data } from 'jquery';
import React, { useState } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

//components

import Data from './Data'

function Carousel() {

  // set state

  const [index, setIndex] = useState(0);
  //console.log(Data);
  //To get all properties from Data array based on index
  const { name, job, image, text } = Data[index];


  const checkNumber = (number) => {
    if (number > Data.length - 1) {
      return 0
    } if (number < 0) {
      return Data.length - 1
    } else {
      return number;
    }
  }

  const nextPerson = () => {
    setIndex((ind) => {
      let newIndex = ind + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((ind) => {
      let newIndex = ind - 1;
      return checkNumber(newIndex);
    })
  }

  // for random display
  // Math op. to make sure we get a number IN BETWEEN 0 and the length of the Data array
  const randomDisplay = () => {
    let randomNumber = Math.floor((Math.random() * Data.length))
    console.log(randomNumber);
    setIndex(randomNumber)
  }



  return (
    <div style={{ margin: '5rem', padding: '2.5rem' }} >
      <Grid container centered textAlign='center' columns={1}>
        <Card raised  >
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{job}</Card.Meta>
            <Card.Description> {text} </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon onClick={prevPerson} size='big' link name='angle left' />
            <Icon onClick={nextPerson} size='big' link name='angle right' />
            <div style={{ margin: '1rem' }}>
              <Icon onClick={randomDisplay} size='big' link name='random' />
            </div>
          </Card.Content>
        </Card>
      </Grid>
    </div>
  )
}

export default Carousel
