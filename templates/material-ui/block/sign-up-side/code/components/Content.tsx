'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { SitemarkIcon } from '?/./CustomIcons.{js,jsx,ts,tsx}';

export type ContentProps = {
  content: {
    icon: 'ThumbUp' | 'Construction' | 'SettingsSuggested' | 'AutoFixHighRounded',
    title: string,
    description: string,
  }[]
};

const iconMap = {
  ThumbUp: <ThumbUpAltRoundedIcon sx={{color: 'text.secondary'}}/>,
  Construction: <ConstructionRoundedIcon sx={{color: 'text.secondary'}}/>,
  SettingsSuggested: <SettingsSuggestRoundedIcon sx={{color: 'text.secondary'}}/>,
  AutoFixHighRounded: <AutoFixHighRoundedIcon sx={{color: 'text.secondary'}}/>
}

export function Content(props: ContentProps) {
  const {content} = props;

  return (
    <Stack
      sx={{flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450}}
    >
      <Box sx={{display: {xs: 'none', md: 'flex'}}}>
        <SitemarkIcon/>
      </Box>
      {content.map((item, index) => (
        <Stack key={index} direction="row" sx={{gap: 2}}>
          {iconMap[item.icon]}
          <div>
            <Typography gutterBottom sx={{fontWeight: 'medium'}}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{color: 'text.secondary'}}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
