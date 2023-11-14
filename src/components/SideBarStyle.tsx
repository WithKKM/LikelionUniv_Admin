import styled from 'styled-components';

export const Container = styled.div`
    z-index: 2;
    height: 100%;
    flex-direction: column;
    margin-top: 50px;

    .SideBarButton {
        padding: 13px;
        border: none;
        background-color: transparent;
        margin-left: 12px;

        svg {
            width: 24px;
            height: 24px;

            color: black;
        }

        &:hover {
            cursor: pointer;
            svg {
                path {
                    color: #ff7710;
                }
            }
        }
    }
`;

export const ClosedSideBar = styled.header`
    position: fixed;
    top: 0;
`;

export const OpenSideBar = styled.header`
    height: 100%;
    width: 100%;
    max-width: 360px;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;

    section {
        width: 100%;
        height: 100%;

        background: #f2f4f6;

        display: flex;
        flex-direction: column;

        ul {
            .MainLink {
                transition: background 0.3s;
                justify-content: space-between; /* 추가된 부분 */
                align-items: center; /* 추가된 부분 */
                &:hover {
                    cursor: pointer;
                    background: #dcdfe3;
                }
            }

            .board_div {
                color: #dcdfe3;

                font-size: 13px;
                font-weight: 700;
                line-height: 13px;
                margin-bottom: 10px;
            }

            a {
                font-size: 16px;
                font-weight: 700;
                line-height: 16px;

                text-decoration-line: none;
                color: inherit;

                padding: 12px 12px;

                display: flex;
                justify-content: space-between;
                align-items: center;

                max-width: 240px;
                &:hover {
                    cursor: pointer;
                    background: #dcdfe3;
                    color: #ff7710;
                }
            }
        }
    }
`;
