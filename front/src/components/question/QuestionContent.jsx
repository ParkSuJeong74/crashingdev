import { Box, Button, Stack } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil";
import {useNavigate } from 'react-router-dom';

import style from '../../srcAssets/style/Question.module.css'
import {questState, currentNumState } from '../../atom.jsx';
import InputText from "./inputType/InputText";
import InputCheck from "./inputType/InputCheck";

function QuestionContent(){
    const navigate = useNavigate()
    const quest = useRecoilValue(questState);
    const [currentNum, setCurrentNum] = useRecoilState(currentNumState);

    const movePrevNumber = () => {
        setCurrentNum((prev) => prev - 1)
    }

    const moveNextNumber = () => {
        setCurrentNum((prev) => prev + 1)
    }

    const toggleInputSpace = () => {
        if(currentNum >= 0 && currentNum <= 2){
            return <InputText></InputText>
        }
        return <InputCheck currentQuest = {quest[currentNum]}></InputCheck>
    }

    console.log(quest)

    return (
        <Box className={style.questBox}>

            {/* 설문조사 문항 질문 */}
            <div className={`${style.highlight} ${style.quiz}`}>{quest[currentNum]?.quiz}</div>

            {/* 입력 공간 형식이 문제에 따라 바뀜 */}
            {toggleInputSpace()}
            
            <Stack sx={{display: 'flex', flexDirection: 'row'}} className={style.toggleButtons}>
                {currentNum !== 0 && 
                    <Button color="secondary" onClick={() => movePrevNumber()}>이전</Button>}
                {currentNum !== 9 &&
                    <Button color="secondary" onClick={() => moveNextNumber()}>다음</Button>}
            </Stack>

            {/* 마지막 페이지에서 결과 페이지로 이동 버튼 */}
            {currentNum === 9 &&
                <Box className={style.guide}>
                    <h1>재밌으셨나요? 결과를 확인해볼까요?</h1>
                    <input  
                        type="checkbox"
                        onChange={(e) => e.target.checked ? navigate("result") : ''}
                    />
                </Box>}
            
        </Box>
    )
}

export default QuestionContent