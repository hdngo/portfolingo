import _ from 'lodash';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['cat', 'weback'], ' ');
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());

  [1, 2, 3, 4, 5, 6].map((n) => n + 1);