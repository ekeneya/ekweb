import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {
  Avatar,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
  MenuButton,
  ListItem,
  FontIcon,
  Divider
} from 'react-md';

import LINKS from '../../commun/links';

import NavLink from '../../commun/navLink';

const HEADERS = [
  "Nom de la structure", 
  "Latitude", 
  "Longitude", 
  "Type", 
  "Ville",
  "Action"
];


export default class TableData extends Component {

  constructor(props){   
    super(props);
  }

  componentDidMount(){
    this.props.searchStructures();
  }

  onPaginate(pageActive){
    this.props.setPageActive(pageActive)
  }

  render() {
    const {list, nombreStructure, pageActive, parPage, modal} = this.props;
    
    return(

      <div>
        <DataTable baseId="menu-table">
          <TableHeader>
            <TableRow>
              {HEADERS.map((item, i)=>(
                <TableColumn key={'c'+i} >
                  {item}
                </TableColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map(({id, name, longitude, latitude, type, ville})=>(
              <TableRow key={'s'+id}>
                <TableColumn>
                  <Link to={LINKS.STRUCTURE_VISUALISER+"?id="+id} >{name}</Link>
                </TableColumn>
                <TableColumn>{latitude}</TableColumn>
                <TableColumn>{longitude}</TableColumn>
                <TableColumn>{type.libelle}</TableColumn>
                <TableColumn>{ville.libelle}</TableColumn>
                <TableColumn>
                  <MenuButton
                    id={'menu_vertical'+id}
                    icon
                    menuItems={[
                      <NavLink 
                        key={"v"+id}
                        label='Visualiser'
                        to={LINKS.STRUCTURE_VISUALISER+"?id="+id}
                        icon='streetview'
                      />,
                      <NavLink
                        key={"m"+id}
                        label='Modifier'
                        to={LINKS.STRUCTURE_GESTION+"?id="+id}
                        icon='edit'
                      />,
                      <Divider key={"d"+id} />,
                      <ListItem 
                        key={"d"+id}
                        leftIcon={<FontIcon error >delete</FontIcon>}
                        onClick={()=>{alert("ok")}}
                        primaryText={<span className='md-text--error' >Supprimer</span>} 
                      />
                    ]}
                  >
                    more_vert
                  </MenuButton>
                </TableColumn>
              </TableRow>
            ))}
          </TableBody>
          <TablePagination 
            rows={nombreStructure} 
            page={pageActive}
            rowsPerPage={parPage}
            rowsPerPageLabel="Par page"
            onPagination={this.props.onPaginate.bind(this)} />
        </DataTable>
      </div>
    )
  }

}