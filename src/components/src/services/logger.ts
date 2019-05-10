enum level {
  info = 0,
  error
}

export function info(component: string, message: any) {
  return log(component, message, level.info)
}

export function error(component: string, message: any) {
  return log(component, message, level.error)
}

function log(component: string, message: any, lvl: level) {
  const key = `%c Q ${component} `;
  const color = [{
    color: '#226977',
    print: () => console.log(key, styles, message)
  }, {
    color: '#9F0F16',
    print: () => console.error(key, styles, message)
  }]

  const styles = [
    `background: ${color[lvl].color}`,
    'border-radius: 2px',
    'color: #fff',
    'font-weight: 500',
    `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif`,
    'font-size: 9px',
    'padding: 2px',
  ].join(';')

  color[lvl].print()
}
