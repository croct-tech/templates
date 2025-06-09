'use client';

//import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { SitemarkIcon } from '?/./custom-icons.{js,jsx,ts,tsx}';

export type ProductInformationProps = {
  productInformation: Array<{
    icon?: 'ThumbUp' | 'Construction' | 'SettingsSuggested' | 'AutoFixHighRounded',
    title: string,
    description: string,
  }>
}

export function ProductInformation(props: ProductInformationProps) {
  const {productInformation} = props

  const iconMap = {
    ThumbUp: ThumbUpAltRoundedIcon,
    Construction: ConstructionRoundedIcon,
    SettingsSuggested: SettingsSuggestRoundedIcon,
    AutoFixHighRounded: AutoFixHighRoundedIcon
  }
  
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box>
      {productInformation.map((item, index) => {
        const Icon = item.icon ? iconMap[item.icon] : null;
        return (
          <Stack key={index} direction="row" sx={{ gap: 2 }}>
            {Icon && (
              <Icon sx={{ color: 'text.secondary' }} />
            )}
            <div>
              <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </div>
          </Stack>
        )
      })}
    </Stack>
  );
}