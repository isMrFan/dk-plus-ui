import type * as components from './components'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DkButton: typeof components.DkButton
    Dkcodedisplay: typeof components.Dkcodedisplay
    DkContainer: typeof components.DkContainer
    DkFooter: typeof components.DkFooter
    dkHeader: typeof components.dkHeader
    DkIcon: typeof components.DkIcon
    DkInput: typeof components.DkInput
    DkInputNumber: typeof components.DkInputNumber
    DkMain: typeof components.DkMain
    DkShadow: typeof components.DkShadow
    DkSpace: typeof components.DkSpace
  }
  interface ComponentCustomProperties {
    DkLoading: typeof components.DkLoading
  }
}

declare global {
  const isDev: boolean
}
