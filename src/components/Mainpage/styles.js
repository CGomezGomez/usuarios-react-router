import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column ;
    gap: 20px;
`;

const StyledH1 = styled.h1`
    
`;

const StyledContainerInput = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
`;

const StyledConCheckBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
   
`;

const StyledCheckbox = styled.input`

`;

const StyledContainerValue = styled.select`

    
`;

const StyledValue = styled.option`
    
`;

const StyledUser = styled.div`
    width: 40%;
    border-radius: 10px;
    box-shadow: 1px 1px 3px gray;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const StyledContainerLeft = styled.div`
   
    display: flex;
    gap: 10px;
    
`;

const StyledImage = styled.img`
    width: 50px;
    border-radius: 100%;
    
`;

const StyledText = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
 
`;

const StyledRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const StyledH2 = styled.h2`
    
    font-size: 14px;
    
`;

const StyledActive = styled.h2`

    font-size: 14px;
    color: 
    ${({active}) => active ? 'green' : 'red'};

`;

const StyledButton = styled.button`
    padding: 5px;
`;

export {StyledContainer, StyledH1, StyledInput, StyledCheckbox, StyledContainerValue, StyledValue, StyledUser, StyledContainerInput, StyledContainerLeft, StyledImage, StyledText, StyledRight, StyledH2, StyledActive, StyledButton, StyledConCheckBox};