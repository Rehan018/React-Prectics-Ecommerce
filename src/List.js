import React from 'react';
import { courses } from './data';
import Course from './components/Course';
import { Container } from './reusable.styled'; // Import Container from the resuable.styled.js file

class List extends React.Component {
  render() {
    const { isCourseinBag, handleAdd, handleRemove } = this.props;
    return (
   
      <Container flex="3" className="list"> 
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isInBag={isCourseinBag(v.id)}
          />
        ))}
      </Container>
    );
  }
}

export default List;
