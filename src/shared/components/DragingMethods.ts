import themeSettings from '../../app/theme/ThemeSettings';
const theme = themeSettings();

export const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    userSelect: "none",
    padding: "1px",
    borderRadius: "20px",
    margin: `0 0 ${8 * 2}px 0`,
    zIndex: isDragging ? 1000 : 0,
    background: isDragging ? theme.palette.primary.main : "#00000000",

    // styles we need to apply on draggables
    ...draggableStyle,
    '&:firstChild': {
        margin: "0px !important",
    }
});

export const getListStyle = (isDraggingOver: boolean) => {
    return {
        background: isDraggingOver ? theme.palette.action.hover : '#fafbfb',
        padding: 8,
        // width: 250,
    };
};

