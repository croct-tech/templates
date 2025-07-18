'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

export type FeatureProps = {
  icon: 'ViewQuiltRounded' | 'EdgesensorHighRounded' | 'DevicesRounded',
  title: string,
  description: string,
  images: {
    light: string;
    dark: string;
  },
}

export type FeaturesSectionProps = {
  title: string,
  description?: string,
  features: FeatureProps[],
}

const iconMap = {
  ViewQuiltRounded: <ViewQuiltRoundedIcon/>,
  EdgesensorHighRounded: <EdgesensorHighRoundedIcon/>,
  DevicesRounded: <DevicesRoundedIcon/>,
}

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({theme}) => ({
  variants: [
    {
      props: ({selected}) => !!selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: FeatureProps;
  features: FeatureProps[]
}

function MobileLayout(
  {
    selectedItemIndex,
    handleItemClick,
    selectedFeature,
    features
  }: MobileLayoutProps
) {
  if (!features[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: {xs: 'flex', sm: 'none'},
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{display: 'flex', gap: 2, overflow: 'auto'}}>
        {features.map(({title}, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            features[selectedItemIndex]
              ? ({
                '--items-imageLight': `url("${features[selectedItemIndex].images.light}")`,
                '--items-imageDark': `url("${features[selectedItemIndex].images.dark}")`,
              } as React.CSSProperties & {[key: string]: string})
              : {}
          }
        />
        <Box sx={{px: 2, pb: 2}}>
          <Typography
            gutterBottom
            sx={{color: 'text.primary', fontWeight: 'medium'}}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{color: 'text.secondary', mb: 1.5}}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export function FeaturesSection(props: FeaturesSectionProps) {
  const {title, description, features} = props;
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = features[selectedItemIndex];

  return (
    <Container id="features" sx={{py: {xs: 8, sm: 16}}}>
      <Box sx={{width: {sm: '100%', md: '60%'}}}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{color: 'text.primary'}}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            sx={{color: 'text.secondary', mb: {xs: 2, sm: 4}}}
          >
            {description}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row-reverse'},
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: {xs: 'none', sm: 'flex'},
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {features.map(({icon, title, description}, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {iconMap[icon]}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
            features={features}
          />
        </div>
        <Box
          sx={{
            display: {xs: 'none', sm: 'flex'},
            width: {xs: '100%', md: '70%'},
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: {xs: 'none', sm: 'flex'},
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                features[selectedItemIndex]
                  ? ({
                    '--items-imageLight': `url("${features[selectedItemIndex].images.light}")`,
                    '--items-imageDark': `url("${features[selectedItemIndex].images.dark}")`,
                  } as React.CSSProperties & {[key: string]: string})
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
