import React from "react"
import CardContent, { CardContentProps } from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export type CardTitleProps = Omit<CardContentProps, 'children'> & {
  title: React.ReactNode,
  subtitle?: React.ReactNode,
}

export default React.memo(function CardTitle({ title, subtitle, ...props }: CardTitleProps) {
  return <CardContent {...props}>
    {typeof title === 'string' && <Typography gutterBottom variant="h5" component="h5" fontSize={16} fontWeight={600} lineHeight={1.5} margin={0} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{title}</Typography>}
    {typeof title !== 'string' && title}
    {typeof subtitle === 'string' && <Typography variant="body2" color="text.secondary" fontSize={14} fontWeight={500} lineHeight={1.5} margin={0} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{subtitle}</Typography>}
    {typeof subtitle !== 'string' && subtitle}
  </CardContent>
})