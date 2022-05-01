import { Container } from "@mui/material"
import styled from "styled-components";
import result from '../../srcAssets/style/Result.module.css'
import norway from '../../srcAssets/img/norway.png'
import ChartComposed from "../mainpage/chart/ChartComposed";

function Result({ user, activeBtn }){
    return (
        <Container sx={{py: 7, mt: 12}}>
            <ResultBox className={result.resultBox}>
                <div>
                    <div className={result.resultBoxtop}>
                        <span>당신은 <span className={result.resultUserflag}>대한민국</span> 국민이지만 당신의 <span className={result.resultTi}>행복 Ti</span>는</span>
                    </div>
                    <div className={result.resultFlag}>
                        <NationFlag src={norway} /><span className={result.resultResultType}><span className={result.resultCountry}>노르웨이</span><span className={result.resultType}> 형</span>입니다!</span>
                    </div>
                    <div className={result.resultInfoBox}>
                        <p className={result.resultInfo1}>
                            당신은 행복한 <span className={result.resultUserflag}>대한민국</span> 국민입니다.
                        </p>
                        <p className={result.resultInfo2}>
                            현재보다 당신이 더 행복해질 가능성은 <span className={result.resultPercent}>50%</span>입니다.
                        </p>
                    </div>
                </div>
            </ResultBox>

            <div className={result.resultTitle1}>
                <span className={result.resultTitle2}><span className={result.resultCountry}>노르웨이</span>형 분석 결과</span>
            </div>

            <ResultBox className={result.resultBox2}>
                <ChartComposed active={activeBtn === 1}></ChartComposed>
            </ResultBox>


            <div className={result.resultTitle3}>
                <span className={result.resultTitle4}>행복도가 비슷한 나라는?</span>
            </div>

            <ResultBox className={result.resultBox3}>

            </ResultBox>
        </Container>
    )
}
export default Result


const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NationFlag = styled.img`
    width: 200px;
    margin: 20px 160px 20px 20px;
`;