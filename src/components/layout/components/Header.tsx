import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, Input, TextField, Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

type Props = {};

const focusedColor = '#fff';
const useStyles = makeStyles((theme?: Theme) =>
  createStyles({
    root: {
      // input label when focused
      '& label.Mui-focused': {
        color: focusedColor,
        top: '-2px !important',
      },
      // focused color for input with variant='standard'
      '& .MuiInput-underline:after': {
        borderBottomColor: focusedColor,
      },
      // focused color for input with variant='filled'
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: focusedColor,
      },
      // focused color for input with variant='outlined'
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#fff',
        },
        '&:hover fieldset': {
          borderColor: '#e14f4f',
        },
        '&.Mui-focused fieldset': {
          borderColor: focusedColor,
        },
      },
      '& .MuiInputLabel-outlined': {
        color: '#fff',
      },
    },
  })
);
const Header = (props: Props) => {
  const classes = useStyles();
  const [isShowInput, setIsShowInput] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.scrollY >= 34) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="Header">
      <div
        className="Header-container"
        style={{
          display: isFixed ? 'none' : 'block',
        }}
      >
        <Container fixed maxWidth="xl">
          {/* header first */}
          <Grid
            container
            className="header-first"
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
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

      {/* header nav */}
      <div
        className="header__nav"
        style={{
          top: isFixed ? '0px' : '',
          position: isFixed ? 'fixed' : 'relative',
        }}
      >
        <Container
          fixed
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '40px 0',
            position: 'relative',
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
          <Box className="header__nav__search">
            <label htmlFor={'header-input'} onClick={() => setIsShowInput(!isShowInput)}>
              <SearchIcon />
            </label>
          </Box>
          <TextField
            label="search..."
            variant="outlined"
            id="header-input"
            className={classes.root}
            InputLabelProps={{
              style: {
                top: '-14px',
              },
            }}
            inputProps={{
              style: {
                color: '#fff',
                height: 25,
                padding: '0 14px',
              },
            }}
            sx={{
              color: '#fff !important',
              borderRadius: '5px',
              position: 'absolute',
              right: { lg: 110, md: 60 },
              width: { sm: '65%', xs: '70%', md: '20%' },
              bottom: 0,
              // backgroundColor: '#fff',
              transition: 'all 0.5s',
              transform: isShowInput ? 'translateY(0)' : 'translateY(25px)',
              opacity: isShowInput ? '1' : '0',
            }}
            // style={{
            //   transform: isShowInput ? 'translateY(0)' : 'translateY(25px)',
            //   opacity: isShowInput ? '1' : '0',
            // }}
            disabled={!isShowInput}
          ></TextField>
        </Container>
      </div>

      {/* content */}
      <Box className="header__content">
        <Box
          sx={{
            fontSize: {
              xs: '50px !important',
              sm: '70px !important',
              md: '100px !important',
              lg: '120px !important',
            },
          }}
          className="header__content__discover"
        >
          discover
        </Box>
        <Box
          sx={{
            fontSize: {
              xs: '30px !important',
              sm: '40px !important',
              md: '50px !important',
              lg: '60px !important',
            },
          }}
          className="header__content__world"
        >
          the world
        </Box>
        <Link to="/cart" className="header__content__explore">
          <div>explore now</div>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </Box>
    </div>
  );
};

export default Header;
