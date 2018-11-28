export const NAVIGATE = 'NAVIGATE';
export const screens = {
  TOP_SOURCES: 'TOP_SOURCES',
  SEARCH: 'SEARCH'
}

export const navigate = screen => {
  return {
    type: NAVIGATE,
    screen
  }
}