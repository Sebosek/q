enum level {
  info = 0,
  error
}

export function info(component: string, message: string) {
  return log(component, message, level.info)
}

export function error(component: string, message: string) {
  return log(component, message, level.error)
}

function log(component: string, message: string, lvl: level) {
  const key = `%c Q ${component} `;
  const color = [{
    color: '#226977',
    print: () => console.log(key, styles, message.trim())
  }, {
    color: '#9F0F16',
    print: () => console.error(key, styles, message.trim())
  }]

  const styles = [
    `background: ${color[lvl].color}`,
    'border-radius: 2px',
    'color: #fff',
    'font-weight: 500',
    `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Arial, sans-serif`,
    'font-size: 10px',
    'padding: 2px',
  ].join(';')

  color[lvl].print()
}
