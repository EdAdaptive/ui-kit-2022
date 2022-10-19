import { Grid, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

import { Color0, Color1, Color2, Color3, SmallLightLogo } from '../../../src/icons';
import TopBar from '../../common/top-bar';
import ColorCardGroup from './color-card-group';
import {
  ColorConTrastExplanation,
  colorsConstant,
  purposeConstant,
} from './palette.constants';

const SubTitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography variant={'h4'} sx={{ margin: '6px 0px' }}>
        {subTitle}
      </Typography>
    </Grid>
  );
};

const TextContent = ({ children, width }: { children: string; width?: string }) => {
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

const ColorIcons = () => (
  <Grid container sx={{ width: '146px' }}>
    <Grid item xs={3}>
      <SvgIcon
        component={Color0}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color1}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color2}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
    <Grid item xs={3}>
      <SvgIcon
        component={Color3}
        viewBox="0 0 35 35"
        sx={{ width: '34px', height: '34px' }}
      />
    </Grid>
  </Grid>
);

const Palette: React.FC = () => {
  return (
    <Grid sx={{ minWidth: '1950px' }}>
      <Grid item xs={12}>
        <TopBar icon={SmallLightLogo} title={'Reactive Design System'} />
      </Grid>
      <Grid
        container
        sx={{ bgcolor: '#323232', color: '#FFFFFF', padding: '1rem' }}
        rowGap={5}
      >
        <SubTitle subTitle={purposeConstant.title} />
        <TextContent>{purposeConstant.content[0]}</TextContent>
        <TextContent>{purposeConstant.content[1]}</TextContent>
        {colorsConstant.map((color, index) => {
          return (
            <Grid key={color.content + index} container rowGap={2}>
              <Grid item xs={2}>
                {color.title && <SubTitle subTitle={color.title} />}
                {color.content && <TextContent width="100%">{color.content}</TextContent>}
              </Grid>
              <Grid item xs={9}>
                {color.colors.map((value, index) => (
                  <ColorCardGroup key={JSON.stringify(value) + index} colors={value} />
                ))}
              </Grid>
            </Grid>
          );
        })}
        <Grid container columnGap={2}>
          <Grid item xs={4}>
            <Typography variant={'body2'}>{ColorConTrastExplanation[0]}</Typography>
            <Typography variant={'body2'}>{ColorConTrastExplanation[1]}</Typography>
          </Grid>
          <Grid item xs={6}>
            <ColorIcons />
            <Grid item xs={12} sx={{ width: '180px' }}>
              <Typography
                variant={'body2'}
                sx={{ color: '#CFCFCF', fontStyle: 'italic' }}
              >
                {ColorConTrastExplanation[2]}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Palette;
