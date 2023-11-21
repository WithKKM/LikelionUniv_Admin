import styled from 'styled-components';

export const EditModalStyle = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 20px;
    max-width: 704px;
    max-height: 622px;

    flex-direction: column;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    .InputBox {
        width: 455px;
        height: 50px;
        top: 144px;
        left: 174px;
        border-radius: 6px;
        border: 0.4px solid #6b6b6b;
        margin-bottom: 16px;
        align-items: center;
    }
    .DropdownList {
    }
    button {
        width: 60px;
        height: 31px;
        top: 180px;
        left: 1011px;
        padding: 4px 8px;
        justify-content: center;
        display: flex;
        background-color: #adb3ba;
        color: #fff;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #ff7710;
        }
    }
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    width: 1000%;
`;
