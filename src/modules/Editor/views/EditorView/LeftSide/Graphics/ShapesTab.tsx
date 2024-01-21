import React, {useEffect, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {ReactSVG} from 'react-svg';
import {RenderMode, ShapeTypes} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';

interface Shape {
  id: ShapeTypes;
  name: string;
  src: string;
}

const Shapes: Shape[] = [
  {id: 'rectangle', name: 'Rectangle', src: 'rectangle'},
  {id: 'circle', name: 'Circle', src: 'circle'},
  {id: 'triangle', name: 'Triangle', src: 'triangle'},
  {id: 'star5', name: 'Star1', src: 'Star1'},
  {id: 'star4', name: 'Star2', src: 'Star2'},
  {id: 'star8', name: 'Star3', src: 'Star3'},
  {id: 'pentagram', name: 'Pentagram', src: 'pentagram'},
  {id: 'hex', name: 'Hex', src: 'Star5'},
];

function ShapesTab() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {drawShapeById} = useContext(EditorContext);

  const classes = useStyles();

  return (
    <Box className={classes.shapesTab}>
      {Shapes.map((shape, index) => {
        return (
          <Box
            key={index}
            className={classes.shapeButt}
            onClick={() => {
              drawShapeById(shape.id);
            }}
          >
            <ReactSVG src={`./assets/icons/graphics/shapes/${shape.src}.svg`} height={'62px'} />
          </Box>
        );
      })}
    </Box>
  );
}

export default ShapesTab;
