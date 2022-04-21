import bgGradientImg from '../srcAssets/img/bg_gradient2.png'
import teamSJ from '../srcAssets/img/teamSJ.png'
import teamJS from '../srcAssets/img/teamJS.png'
import styled from "styled-components";

import { Grid, Container } from '@mui/material';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

function Tilt({options, ...rest}){
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options)
    }, [options])

    return <div ref={tilt} {...rest}/>
}

function Team(){

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 10
    };

    return (
        <BgImage >
        <Container sx={container}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={4} xs={6} sx={{marginBottom: 8}}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamJS} alt="이미지1"/>
                            <MemberDes1>박지수</MemberDes1>
                            <MemberDes2>역할: 백엔드</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>

                <Grid item md={4} xs={6}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamSJ} alt="이미지2"/>
                            <MemberDes1>박수정</MemberDes1>
                            <MemberDes2>역할: 팀장, 백엔드</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>
                
                <Grid item md={4} xs={6}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamSJ} alt="이미지2"/>
                            <MemberDes1>김광재</MemberDes1>
                            <MemberDes2>역할: 프론트엔드</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>
                <Grid item md={4} xs={6}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamSJ} alt="이미지2"/>
                            <MemberDes1>김다현</MemberDes1>
                            <MemberDes2>역할: 백엔드, 데이터분석</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>
                <Grid item md={4} xs={6}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamSJ} alt="이미지2"/>
                            <MemberDes1>박정미</MemberDes1>
                            <MemberDes2>역할: 프론트엔드</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>
                <Grid item md={4} xs={6}>
                    <Tilt options={options}>
                        <Card>
                            <MemberImg src={teamSJ} alt="이미지2"/>
                            <MemberDes1>이주안</MemberDes1>
                            <MemberDes2>역할: 프론트엔드, 데이터분석</MemberDes2>
                        </Card>
                    </Tilt>
                </Grid>
            </Grid>
        </Container>
        </BgImage>
    )
}
export default Team

const BgImage = styled.div`
    margin-top: 10px;
    background-image: url(${bgGradientImg});
    background-repeat: 'repeat-x',
`;

const container = {
    padding: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Card = styled.div`
    width: 90%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255 ,0.3);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
`;

const MemberImg = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 15px;
`;

const MemberDes1 = styled.h2`
    font-size: 40px;
    font-weight: 600;
    margin-top: 20px;
`;
const MemberDes2 = styled.p`
    font-size: 18px;
    margin: 10px auto;
`;

