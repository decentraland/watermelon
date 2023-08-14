import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import CardContent, { CardContentProps } from "@mui/material/CardContent"
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from "@mui/material/Typography"
import { neutral, rarity, rarityGradient } from "@dcl/watermelon-types/src/colors"
import RarityLabel from "../Rarity/RarityLabel"
import { useTheme } from "@mui/material"

export const nft = {
  "id": "0xdd9c7bc159dacb19c9f6b9d7e23948c87aa2397f-46",
  "tokenId": "46",
  "contractAddress": "0xdd9c7bc159dacb19c9f6b9d7e23948c87aa2397f",
  "activeOrderId": null,
  "openRentalId": null,
  "owner": "0x8cff6832174091dae86f0244e3fd92d4ced2fe07",
  "name": "Infinity Cow Coat - Guest Artists Collection",
  "image": "https://peer.decentraland.org/lambdas/collections/contents/urn:decentraland:ethereum:collections-v1:xmash_up_2020:xmash_up_coat_upper_body/thumbnail",
  "url": "/contracts/0xdd9c7bc159dacb19c9f6b9d7e23948c87aa2397f/tokens/46",
  "data": {
    "wearable": {
      "bodyShapes": [
        "BaseMale",
        "BaseFemale"
      ],
      "category": "upper_body",
      "description": "Infinity Cow Coat. | Art by Jonathan Wolfe - 3D Design by vrglit.ch | Guest Artists Collection",
      "rarity": "mythic" as keyof typeof rarity,
      "isSmart": false
    }
  },
  "issuedId": null,
  "itemId": null,
  "category": "wearable",
  "network": "ETHEREUM",
  "chainId": 1,
  "createdAt": 1676068151000,
  "updatedAt": 1676068151000,
  "soldAt": 0
}

export type NTFItem = typeof nft

export type CardTitleProps = {
  nft?: NTFItem,
  collectionPrice?: number
  prices?: number[],
  owners?: number,
  currency?: React.ReactNode
}

export default React.memo(function CardMarketplaceItem({ nft, prices, owners, collectionPrice }: CardTitleProps) {
  const theme = useTheme()
  const cheapest = prices && Math.min(...prices)
  return <Card sx={{ width: 260 }}>
    <CardMedia
      title="Infinity Cow Coat - Guest Artists Collection"
      component="div"
      image=""
      style={{
        position: 'relative',
        padding: "0 30px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5,
        backgroundImage: nft ? rarityGradient[nft.data.wearable.rarity] || "" : "",
      }}
    >
      {nft && <svg width="1" height="1" style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: `url("${nft?.image || ''}")`,
        backgroundSize: "contain",
      }}
      />}
      {!nft && <ImageOutlinedIcon viewBox="-25 -25 75 75" color="secondary" style={{ width: '100%', height: 'auto', color: theme.palette.mode === 'dark' ? neutral.gray2 : neutral.gray4 }} />}
    </CardMedia>
    {!nft && <CardContent>
      <svg width={1} height={1} style={{
        width: '100%',
        height: 16,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
      <svg width={1} height={1} style={{
        width: '50%',
        height: 16,
        marginTop: 8,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
      <div style={{ marginTop: 8 }}/>
      <svg width={1} height={1} style={{
        width: '66%',
        height: 16,
        marginTop: 8,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
      <svg width={1} height={1} style={{
        width: '66%',
        height: 16,
        marginTop: 8,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
      <svg width={1} height={1} style={{
        width: '66%',
        height: 16,
        marginTop: 8,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
      <div style={{ marginTop: 8 }}/>
      <svg width={1} height={1} style={{
        width: '25%',
        height: 16,
        marginTop: 8,
        backgroundColor: theme.palette.mode === 'dark' ? neutral.gray1 : neutral.gray5
      }} />
    </CardContent>}
    {nft && <CardContent>
      <Typography gutterBottom variant="h5" component="h5" fontSize={16} fontWeight={600} lineHeight={1.5} margin={0} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>{nft.name}</Typography>
      <Typography variant="body2" color="text.secondary" fontSize={14} fontWeight={500} lineHeight={1.5} margin={0} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>Decentraland</Typography>
      {collectionPrice && <Typography marginTop={"16px"} fontWeight={400} fontSize={14} lineHeight={1.5}>Buy directly from the creator 💫</Typography>}
      {collectionPrice && <Typography fontWeight={600} fontSize={30} lineHeight={1.5}>
        <SvgIcon>
          <path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />
        </SvgIcon>
        {collectionPrice}
      </Typography>}
      {collectionPrice && prices && prices.length > 0 && <Typography fontWeight={400} fontSize={14} lineHeight={1.2}>
        {prices.length} Listings: <SvgIcon fontSize="inherit">
          <path d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z" />
        </SvgIcon> {cheapest}
      </Typography>}
      {!collectionPrice && !prices && <Typography marginTop={"16px"} fontWeight={500} fontSize={16} lineHeight={1.5}>Not for sales</Typography>}
      {!collectionPrice && !prices && owners && <Typography fontWeight={400} fontSize={14} lineHeight={1.5}>{owners} owners</Typography>}
      <Stack spacing={1} marginTop={"16px"} direction="row">
        <RarityLabel rarity={nft.data.wearable.rarity as any} />
      </Stack>
    </CardContent>}
  </Card>
})