import { describe, expect, it } from 'vitest'
import { humpConversion, sizeChange } from './'

describe('checking _utils/props/filtration.ts', () => {
  it('runnning humpConversion', () => {
    expect(humpConversion('dkButton')).toEqual('dk-button')
  })

  it('runnning sizeChange', () => {
    expect(sizeChange('12px')).toEqual('12px')

    expect(sizeChange(12)).toEqual('12px')

    expect(sizeChange(12, 'rem')).toEqual('12rem')

    expect(sizeChange(undefined)).toEqual('')
  })
})
