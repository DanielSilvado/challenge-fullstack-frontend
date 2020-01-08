import React, { useState } from 'react';
import { Button, InputBase, IconButton, Drawer } from '@material-ui/core';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import CloseIcon from '@material-ui/icons/Close';

import './styles.scss';

function Header(props) {
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    props.changeFilter(e.target.value)
  }


  const MenuFilter = () => {
    return (
      <Drawer open={open} anchor="right" docked={false} className="menuLateral">
        <div className="headerFilter">
          <div className="headerLeft">
            <TuneIcon style={{ color: '#c1c1c1' }} />
            <span>FILTROS</span>
          </div>

          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="#ffffff"
            className="btnClose"
          >
            <CloseIcon />
          </Button>
        </div>
      </Drawer>
    );
  };

  return (
    <header className="containerHeader">
      {open ? <MenuFilter /> : null}
      <div className="containerLeft">
        <Button className="btnLogo">
          <WavesRoundedIcon style={{ color: '#fff' }}></WavesRoundedIcon>
        </Button>
        <span className="division"></span>
        <Button className="btnDefender">
          <SecurityIcon style={{ color: '#292929' }}></SecurityIcon>
        </Button>
        <Button className="btnPerson">
          <PersonIcon style={{ color: '#fff' }}></PersonIcon>
        </Button>

        <div className="containerSearch">
          <InputBase
            style={{ paddingLeft: '15px' }}
            placeholder="Pesquisar..."
            onChange={handleChange}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div className="containerRight">
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          color="#ffffff"
          className="btnTune"
        >
          <TuneIcon />
        </Button>

        <Button
          className="btnInclude"
          variant="contained"
          color="secondary"
          startIcon={<PersonIcon />}
        >
          Incluir Usuário
        </Button>

        <span className="division"></span>

        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PowerSettingsNewIcon />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
