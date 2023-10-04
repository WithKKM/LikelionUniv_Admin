import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';

function Root() {
    return (
        <>
            <Container>
                <Nav />
                <SideBar />
            </Container>
            <Padding />
            <div>
                <Outlet />
            </div>
        </>
    );
}

const Container = styled.div`
    display: flex;
    align-items: flex-start; /* 수직 정렬 방향을 조정할 수 있습니다. */
    /* 다른 스타일을 추가할 수 있습니다. */
`;

const Padding = styled.div`
    height: 56px;
`;

export default Root;
