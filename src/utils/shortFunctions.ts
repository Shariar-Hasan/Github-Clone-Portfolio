// url maker short
export const githubUrl = (userName: string): string => {
  return `https://github.com/${userName}`
}
export const mediumUrl = (userName: string): string => {
  return `https://medium.com/@${userName}`
}
export const facebookUrl = (userName: string): string => {
  return `https://www.facebook.com/${userName}`
}
export const linkedinUrl = (userName: string): string => {
  return `https://www.linkedin.com/in/${userName}`
}
export const twitterUrl = (userName: string): string => {
  return `https://twitter.com/${userName}`
}

export const downloadCV = () => {
  window.open(
    'https://drive.google.com/file/d/1DQzDIEbdVAeag36J271gUwaesAFqYPWE/view?usp=sharing',
    '_blank'
  )
}

export const isIncluded = (string: string = '', pattern: string = '') => {
  return string.toLowerCase().includes(pattern.toLowerCase())
}
export const toBlogSlug = (string: string = '') => {
  return string.replace('https://medium.com/p/', '')
}

export const handleCopyToClipBoard = async (text: string) => {
  if (window && navigator) {
    await navigator.clipboard.writeText(text)
  } else {
    // create execommand to copy text from textarea
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}
