import React from "react"
import { CSSInterpolation, Theme, styled, useThemeProps } from "@mui/material/styles"
import { neutral, rarity, textOnRarity } from "@dcl/watermelon-types/src/colors"

export type RarityLabelProps = {
  rarity: keyof typeof rarity
}

function RarityLabelStyles(props: RarityLabelProps & { theme: Theme }): CSSInterpolation {
  return {
    color: textOnRarity[props.rarity] || neutral.white,
    backgroundColor: rarity[props.rarity] || neutral.softBlack1,
    borderRadius: 2,
    fontFamily: props.theme.typography.fontFamily,
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.5,
    textTransform: "uppercase",
    textAlign: "center",
    margin: 0,
    padding: '2px 8px',
    display: "block",
  }
}

export default styled(
  React.memo(React.forwardRef<HTMLDivElement, RarityLabelProps>(function RarityLabel(props, ref) {
    const {rarity, ...themed} = useThemeProps({props, name: 'RarityLabel'})
    console.log(props, themed)
    return <div {...themed} ref={ref}>{rarity}</div>
  })),
  {
    name: 'RarityLabel',
    slot: 'Root'
  }
)(RarityLabelStyles)
