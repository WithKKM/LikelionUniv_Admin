import styled from 'styled-components';

export const Container = styled.div`
    z-index: 2;
    height: 100%;
    flex-direction: column;
    margin-top: 50px;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
`;

export const ClosedSideBar = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-left: 12px;
        > button {
            padding: 13px;
            border: none;
            background-color: transparent;

            &:hover {
                cursor: pointer;
                svg {
                    path {
                        color: #2694e3;
                    }
                }
            }
        }

        > button svg {
            width: 24px;
            height: 24px;

            color: black;
        }
    }
`;

export const OpenSideBar = styled.header`
    height: 100%;
    width: 100%;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;

    section {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;

        max-width: 360px;
        height: 100%;

        background: #f2f4f6;
        border-radius: 0 12px 12px 0;

        /* Links principais do app */
        nav {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-left: 12px;

            button {
                padding: 13px;
                border: none;
                background-color: transparent;

                &:hover {
                    cursor: pointer;
                    svg {
                        path {
                            color: #2694e3;
                        }
                    }
                }
                svg {
                    width: 24px;
                    height: 24px;

                    color: black;
                }
            }

            ul {
                width: 100%;
                text-align: left;
                display: flex;
                flex-direction: column;
                margin-left: 50px;

                .MainLink {
                    transition: background 0.3s;
                    &:hover {
                        background: #dcdfe3;
                    }
                }
                .board {
                    width: 260px;
                    height: 520px;
                    top: 730px;
                    left: 40px;
                    background-color: #ffffff;
                }

                .board_div {
                    color: #dcdfe3;
                    font-family: Inter;
                    font-size: 13px;
                    font-weight: 700;
                    line-height: 13px;
                    margin-bottom: 10px;
                }

                a {
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 16px;
                    letter-spacing: 0em;
                    text-align: left;

                    text-decoration-line: none;
                    color: inherit;

                    padding: 5px 5px;
                    border-radius: 8px 8px 8px 8px;

                    display: flex;
                    align-items: center;

                    max-width: 240px;
                    margin-bottom: 12px;
                    margin-left: 12px;
                }
            }
        }
    }
`;
