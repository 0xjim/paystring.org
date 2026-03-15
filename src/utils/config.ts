export const getDocsLocation = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return '#'
    case 'stage':
      return '#'
    case 'prod':
      return '#'
    case 'psprod':
      return '#'
    default:
      return '#'
  }
}

export const getBaseURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return '#'
    case 'stage':
      return '#'
    case 'prod':
      return '#'
    case 'psprod':
      return '#'
    default:
      return '#'
  }
}

export const getCharityAppURL = (): string => {
  switch (process.env.GATSBY_RELEASE_ENV) {
    case 'dev':
      return '#'
    case 'stage':
      return '#'
    case 'prod':
      return '#'
    case 'psprod':
      return '#'
    default:
      return '#'
  }
}

export const encodeFormData = (formData: { [s: string]: unknown }): string => {
  const formBody: string[] = []
  Object.entries(formData).forEach(([key, value]) => {
    if (
      typeof value === 'string' ||
      typeof value === 'boolean' ||
      typeof value === 'number'
    ) {
      formBody.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  })
  return formBody.join('&')
}
