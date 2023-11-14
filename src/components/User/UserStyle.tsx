import styled from 'styled-components';

export const Container = styled.div`
    max-width: 70%;
    overflow-x: auto;
    height: 4000px;
    overflow-y: hidden;
    margin: 0 auto;

    table {
        width: 100%;
        border-collapse: collapse;
        justify-content: center;
        border: 1px solid #ddd;

        thead {
            background-color: #f2f2f2;

            th {
                text-align: left;
                padding: 16px 4px;
                border-bottom: 1px solid #ddd;
            }
        }

        tbody {
            tr {
                td {
                    padding: 16px 4px;
                    border-bottom: 1px solid #ddd;
                }

                button {
                    padding: 4px 8px;
                    background-color: #adb3ba;
                    color: #fff;
                    border: none;
                    cursor: pointer;

                    &:hover {
                        background-color: #ff7710;
                    }
                }
            }

            /* 첫 번째 행은 배경색 없애기 */
            tr:first-child {
                background-color: transparent;
            }
        }
    }
`;
