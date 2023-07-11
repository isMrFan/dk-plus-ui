export const objectEntries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
  if (typeof obj !== 'object' || obj === null) {
    if (isDev) {
      console.log('objectEntries', 'Parameter is not an object type.')
    }
    return []
  }
  
  if (Object.entries && Object.entries !== undefined) { 
    return Object.entries(obj) as [keyof T, T[keyof T]][]
  }
  
  const entries: [keyof T, T[keyof T]][] = []

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      entries.push([key, obj[key]])
    }
  }
  
  return entries
}
