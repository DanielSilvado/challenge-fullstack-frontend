import React from 'react';

import Button from '@material-ui/core/Button';

import './styles.scss';

function Pagination() {

  // Functions pagination pass

  return (
    <div className="containerPagination">
      <Button className="btnPage">Primeiro</Button>
      <Button className="btnPage">Anterior</Button>
      <Button variant="contained" color="secondary" className="current">
        1
      </Button>
      <Button className="btnPage">Próximo</Button>
      <Button className="btnPage">Último</Button>
    </div>
  );
}

export default Pagination;
