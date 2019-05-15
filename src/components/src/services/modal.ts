export async function show() {
  const backdrop = await element()
  if (backdrop.shown) {
    return
  }

  backdrop.shown = true
}

export async function hide() {
  const backdrop = await element()
  if (!backdrop.shown) {
    return
  }

  backdrop.shown = false
}

async function element() : Promise<HTMLQBackdropElement> {
  let element = document.querySelector('q-backdrop') as HTMLQBackdropElement
  if (!element) {
    element = document.createElement('q-backdrop')
  }

  const backdrop = await element.componentOnReady()
  return backdrop
}
