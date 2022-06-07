import React from 'react';
import {Divider, Grid, Stack} from '@mui/material';
import Content from '../components/Content';
import Navigation from '../components/Navigation';
import logo from '../assets/notion-david_400x400.png';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

function Home() {
    return (
        <Center>
            <Grid container direction="row"
                  justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Navigation/>
                </Grid>

            </Grid>
        </Center>
    )
}

export default Home;