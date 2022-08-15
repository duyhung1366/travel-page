import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import './index.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="Header">
      <div className="Header-container">
        <Container fixed maxWidth="xl">
          <Grid container className="header-first">
            <Grid item xs={8} sm={8} md={6}>
              <span>0383211385</span>
              <a href="#top">
                <PinterestIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#top">
                <FacebookIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#top">
                <TwitterIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#top">
                <LinkedInIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#top">
                <TelegramIcon sx={{ fontSize: '12px' }} />
              </a>
              <a href="#top">
                <InstagramIcon sx={{ fontSize: '12px' }} />
              </a>
            </Grid>
            <Grid item xs={4} sm={4} md={6} sx={{ textAlign: 'right' }} className="login">
              <Link to="/login" style={{ borderRight: 'solid 1px #fff' }}>
                Login
              </Link>
              <Link to="/register">Register</Link>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="header__nav">
        <Container
          fixed
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <div className="header__nav__logo">
            <a href="#">
              <img src="https://tranhoangkhang1212.github.io/travelix/assets/images/logo.webp" />
              <span>Travelix</span>
            </a>
          </div>
          <Box
            sx={{ display: { md: 'flex', sm: 'none', xs: 'none', lg: 'flex', xl: 'flex' } }}
            className="header__nav__box"
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">contact</Link>
          </Box>
          <Box
            className="header__nav__search"
            sx={{ display: { md: 'flex', sm: 'none', xs: 'none', lg: 'flex', xl: 'flex' } }}
          >
            <a>
              <SearchIcon />
            </a>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Header;
