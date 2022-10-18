import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import { SmallLightLogo } from '../../../src/icons';
import TopBar from '../../common/top-bar';
import ColorCardGroup from './color-card-group';
import { colorsConstant, purposeConstant } from './palette.constants';
const title = (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <SvgIcon
      component={SmallLightLogo}
      viewBox="0 0 35 35"
      sx={{ width: '34px', height: '34px' }}
    />
    <Typography sx={{ color: '#FFFFFF', marginLeft: '1rem', fontSize: '16px' }}>
      Reactive Design System
    </Typography>
  </Box>
);

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography sx={{ margin: '6px 0px' }}>{subTitle}</Typography>
    </Grid>
  );
};

const TextContent = ({
  children,
  width,
}: {
  children: JSX.Element | string;
  width?: string;
}) => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="body2"
        sx={{ width: `${width ? width : '50%'}`, margin: '6px 0px' }}
      >
        {children}
      </Typography>
    </Grid>
  );
};

const Palette: React.FC = () => {
  return (
    <Grid sx={{ minWidth: '1950px' }}>
      <Grid item xs={12}>
        <TopBar title={title} />
      </Grid>
      <Grid
        container
        sx={{ bgcolor: '#323232', color: '#FFFFFF', padding: '1rem' }}
        rowGap={1}
      >
        <SubTitle subTitle={purposeConstant.title} />
        <TextContent>{purposeConstant.content[0]}</TextContent>
        <TextContent>{purposeConstant.content[1]}</TextContent>
        <Grid container columnGap={1}>
          <Grid container xs={2}>
            <SubTitle subTitle="Core Neutrals" />
            <TextContent width="100%">{colorsConstant[0].content}</TextContent>
          </Grid>
          <Grid item xs={9}>
            <ColorCardGroup colors={colorsConstant[0].colors[0]} />
          </Grid>
        </Grid>
        <Grid container columnGap={1}>
          <Grid container xs={2}>
            <TextContent width="100%">{colorsConstant[1].content}</TextContent>
          </Grid>
          <Grid item xs={9}>
            <ColorCardGroup colors={colorsConstant[1].colors[0]} />
          </Grid>
        </Grid>
        <Grid container columnGap={1}>
          <Grid container xs={2}>
            <TextContent width="100%">{colorsConstant[2].content}</TextContent>
          </Grid>
          <Grid item xs={9}>
            <ColorCardGroup colors={colorsConstant[2].colors[0]} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Palette;
