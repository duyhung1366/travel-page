import { Button, Grid } from '@mui/material';
import './index.scss';
import React from 'react';
import { Container } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="Header">
      <div className="Header-container">
        <Container fixed maxWidth="xl">
          <Grid container className="header-first">
            <Grid item xs={6} sm={8} md={8}>
              <span>0383211385</span>
              <a href="#">
                <PinterestIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#">
                <FacebookIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#">
                <TwitterIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#">
                <LinkedInIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#">
                <TelegramIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#">
                <InstagramIcon sx={{ fontSize: '12px' }} />
              </a>
            </Grid>
            <Grid item xs={6} sm={4} md={4} sx={{ textAlign: 'right' }}>
              <a href="#" style={{ borderRight: 'solid 1px #fff' }}>
                Login
              </a>
              <a href="#">Register</a>
            </Grid>
          </Grid>
          <div className="header-nav"></div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
