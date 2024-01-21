import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useContext,
  createRef,
  createContext,
} from 'react';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import {RenderMode} from 'modules/Editor/definitions/types';
import Header from 'shared/components/Header';
import {Engine} from 'babylonjs';
import clsx from 'clsx';
import {useStyles} from './styles';
import EditorContext from '../../context/EditorContext';
import babylonManager from './Babylon/babylonManager';
import {ModelType, SideTypes} from '../utilities';

export interface GameManager {
  engine: Engine;
  studioSceneManager: {
    applyTexture: (imgData: string) => {};
    changeSide: (newSide: keyof typeof SideTypes) => {};
    handlers: {
      onDrop: () => void;
    };
  };
}
const gmRef = createRef<HTMLCanvasElement>();
export const GmContext = createContext<GameManager | undefined>(undefined);

interface Props {
  isResize: boolean;
}
function Editor3D(props: Props) {
  const {isResize} = props;
  const {
    selectedCategory,
    gameManager,
    onSetGameManager,
    selectedModelType,
    selectedSide,
    selectedRenderMode,
    isFirstUse,
  } = useContext(EditorContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const classes = useStyles();

  const studioSceneHandlers = useMemo(() => {
    return {
      onDrop: () => {},
    };
  }, []);

  const disableLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (gameManager) {
      //Destory previous canvas
      gameManager.engine.resize();
    }
  }, [gameManager, isResize]);

  useEffect(() => {
    //on init
    if (gameManager) {
      //Destory previous canvas
      gameManager.engine.dispose();
    }
    const {GManger}: {GManger: GameManager} = babylonManager(gmRef.current, disableLoader, {
      selectedModelType,
    }) as any; //Create Babylonjs Ref
    GManger.studioSceneManager.handlers = studioSceneHandlers; //Hnadlers
    onSetGameManager(GManger);
  }, []);

  return (
    <Box
      style={{
        display: 'flex',
        position: 'absolute',
        alignContent: 'center',
        // background: 'radial-gradient(at top, #f1f3f5 0%, #f1f3f5 100%) top',
        alignItems: 'center',
      }}
      width={'100%'}
      height={'100%'}
    >
      <GmContext.Provider value={gameManager}>
        <canvas
          style={{
            width: '100%',
            height: '100%',
            touchAction: 'none',
            visibility: `${selectedRenderMode === '2DMODE' ? 'hidden' : 'visible'}`,
          }}
          className={classes.canvas}
          ref={gmRef}
        />
      </GmContext.Provider>
    </Box>
  );
}

export default Editor3D;
