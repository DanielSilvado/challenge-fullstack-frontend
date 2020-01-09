import React from 'react';
import {
  TableHead,
  IconButton,
  Checkbox,
  TableCell,
  TableBody,
  Table,
  TableRow,
} from '@material-ui/core';

import Pagination from './pagination/pagination';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArchiveIcon from '@material-ui/icons/Archive';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import SecurityIcon from '@material-ui/icons/Security';

import './styles.scss';

function TableList(props) {
  return (
    <div className="containerTable">
      <Table className="contentTable">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="left">USUÁRIO</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="center">DATA DE INCLUSÃO</TableCell>
            <TableCell align="center">DATA DE ALTERAÇÃO</TableCell>
            <TableCell align="center">REGRAS</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">AÇÕES</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.usersFiltered.map((row, index) => (
            <TableRow
              style={{
                backgroundColor: index % 2 === 0 ? '#e9e9e9' : '#f5f5f5',
              }}
              className="row"
            >
              <div className="overlay"></div>
              <TableCell>
                <Checkbox checked={false} />
              </TableCell>
              <TableCell align="left">{row.user}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="center">{row.date_inclusion}</TableCell>
              <TableCell align="center">{row.date_change}</TableCell>
              <TableCell align="center">{row.rules}</TableCell>
              <TableCell align="center" style={{ color: 'green' }}>
                {row.status}
              </TableCell>

              <TableCell align="center" className="utils">
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
                <IconButton size="small">
                  <ArchiveIcon />
                </IconButton>
                <IconButton size="small">
                  <SecurityIcon />
                </IconButton>
                <IconButton size="small">
                  <CreateIcon />
                </IconButton>
              </TableCell>

              <TableCell align="center">
                <IconButton size="small">
                  <MoreHorizIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination />

    </div>
  );
}

export default TableList;
