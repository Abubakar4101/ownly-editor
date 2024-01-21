export const ThemeColors = {
  ORANGE_THEME: 'ORANGE_THEME',
  BLUE_THEME: 'BLUE_THEME',
  GREEN_THEME: 'GREEN_THEME',
  RED_THEME: 'RED_THEME',
  BLACK_THEME: 'BLACK_THEME',
  PURPLE_THEME: 'PURPLE_THEME',
  INDIGO_THEME: 'INDIGO_THEME',
};

export interface INIT_STATE_ITERFACE {
  activeDir: 'ltr' | 'rtl';
  activeNavbarBg: string; // This can be any color,
  activeSidebarBg: string; // This can be any color
  activeMode: 'light' | 'dark'; // This can be light or dark
  activeTheme: keyof typeof ThemeColors; // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME, ORANGE_THEME
  SidebarWidth: number;
}

const INIT_STATE: INIT_STATE_ITERFACE = {
  activeDir: 'ltr',
  activeNavbarBg: '#0b70fb', // This can be any color,
  activeSidebarBg: '#ffffff', // This can be any color
  activeMode: 'light', // This can be light or dark
  activeTheme: 'BLACK_THEME', // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME, ORANGE_THEME
  SidebarWidth: 240,
};
export default INIT_STATE;
