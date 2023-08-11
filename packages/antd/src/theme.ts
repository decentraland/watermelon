import { base, neutral } from "@dcl/watermelon-types/src/colors"
import { MapToken, SeedToken } from "antd/lib/theme/interface"
import themeBaseDark from "antd/lib/theme/themes/dark"
import themeBaseLight from "antd/lib/theme/themes/default"

function shared(theme: MapToken): MapToken {
  return {
    ...theme,
    fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
    colorPrimary: base.primary,
    colorPrimaryHover: base.primaryLight1,
    colorPrimaryActive: base.primaryLight1,
    colorPrimaryBorderHover: base.primaryLight1,
    colorPrimaryBg: base.primaryDark,
    colorPrimaryBgHover: base.primaryLight2,
    fontSizeHeading1: 96,
    fontSizeHeading2: 60,
    fontSizeHeading3: 48,
    fontSizeHeading4: 34,
    fontSizeHeading5: 20,
  }
}


export function dark(designToken: SeedToken, derivativeToken?: MapToken | undefined): MapToken {
  const result = shared(themeBaseDark(designToken, derivativeToken))
  return result
}

export function light(designToken: SeedToken, derivativeToken?: MapToken | undefined): MapToken {
  const result = shared(themeBaseLight(designToken))
  return result
}