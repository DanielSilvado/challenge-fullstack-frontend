import React from 'react';
import { Button, InputBase, IconButton } from '@material-ui/core';
import WavesRoundedIcon from '@material-ui/icons/WavesRounded';
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import './styles.scss';

function Header() {
  return (
    <header className="containerHeader">
      <div className="containerLeft">
        <Button className="btnLogo">
          <WavesRoundedIcon style={{ color: 'white' }}></WavesRoundedIcon>
        </Button>
        <span className="division"></span>
        <Button className="btnDefender">
          <SecurityIcon style={{ color: '#292929' }}></SecurityIcon>
        </Button>
        <Button className="btnPerson">
          <PersonIcon style={{ color: 'white' }}></PersonIcon>
        </Button>

        <div className="containerSearch">
          <InputBase
            style={{ paddingLeft: '15px' }}
            placeholder="Pesquisar..."
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div className="containerRight">
        <Button variant="contained" color="#ffffff" className="btnTune">
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
