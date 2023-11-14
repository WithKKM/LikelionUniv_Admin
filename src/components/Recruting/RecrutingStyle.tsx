import styled from 'styled-components';

export const Container = styled.div`
    max-width: 70%;
    overflow-x: auto;
    height: 4000px;
    overflow-y: hidden;
    margin: 0 auto;
    position: relative; /* absolute 포지셔닝을 사용하기 위한 상대 포지션 설정 */

    button {
        font-weight: bold;
        padding: 12px 16px;
        background-color: #eaecee;
        color: #212224;
        border: none;
        cursor: pointer;
        margin: 10px;

        &:hover {
            background-color: #ff7710;
        }
    }

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
            }

            tr:first-child {
                background-color: transparent;
            }
        }
    }
`;
