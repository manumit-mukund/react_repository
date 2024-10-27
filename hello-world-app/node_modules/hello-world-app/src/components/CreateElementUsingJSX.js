import React from 'react';

const CreateElementUsingJSX = () => {

  return React.createElement('div',
    { id: 'hello', className: 'myClass' },
    React.createElement('h1', null, 'Hello, CreateElementUsingJSX'))
}

export default CreateElementUsingJSX

