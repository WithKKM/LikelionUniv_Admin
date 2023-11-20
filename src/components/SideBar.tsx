import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ClosedSideBar, Container, OpenSideBar } from './SideBarStyle';

export function SideBar() {
    // 사이드바 열기/닫기 상태를 관리하는 상태
    const [sideBar, setSideBar] = useState(false);

    // 게시판 하위 목록의 표시 여부를 관리하는 상태
    const [showSubList, setShowSubList] = useState(false);

    // 사이드바 열기/닫기 처리 함수
    function handleChangeSideBar() {
        setSideBar(prevState => !prevState);
        setShowSubList(false); // 사이드바가 열릴 때 하위 목록을 닫습니다.
    }

    // 게시판 하위 목록의 표시/숨김을 토글하는 함수
    function handleToggleSubList() {
        setShowSubList(prevState => !prevState);
    }

    return (
        <Container>
            {!sideBar ? (
                // 닫힌 사이드바 콘텐츠
                <ClosedSideBar>
                    <nav>
                        {/* 사이드바 열기 버튼 */}
                        <button
                            className="SideBarButton"
                            onClick={handleChangeSideBar}
                        >
                            <AiOutlineMenu />
                        </button>
                    </nav>
                </ClosedSideBar>
            ) : (
                // 열린 사이드바 콘텐츠
                <OpenSideBar>
                    <section>
                        <nav>
                            <span>
                                {/* 사이드바 닫기 버튼 */}
                                <button
                                    className="SideBarButton"
                                    onClick={handleChangeSideBar}
                                >
                                    <AiOutlineMenu />
                                </button>
                            </span>
                            <ul>
                                {/* 주요 네비게이션 링크 */}
                                <a
                                    className="MainLink"
                                    href="/user"
                                    title="사용자"
                                >
                                    <p>사용자</p>
                                </a>
                                <a
                                    className="MainLink"
                                    href="/Recruting"
                                    title="리크루팅 알림"
                                >
                                    <p>리크루팅 알림</p>
                                </a>
                                {/* 게시판 하위 목록 */}

                                <a
                                    className="MainLink"
                                    onClick={handleToggleSubList}
                                    title="공지사항"
                                >
                                    <p>게시판</p>
                                    {showSubList ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </a>
                                {showSubList && (
                                    <span className="board">
                                        {/* 게시판 하위 링크 */}
                                        <div className="board_div">
                                            멋대 중앙
                                        </div>
                                        <a href="/board1">공지사항</a>
                                        <a href="/board2">질문게시판</a>
                                        <a href="/board1">정보공유</a>
                                        <div className="board_div">
                                            자유게시판
                                        </div>
                                        <a href="/board2">정보공유</a>
                                        <a href="/board1">팀원모집</a>
                                        <a href="/board2">프로젝트 모집</a>
                                        <a href="/board1">프로젝트 자랑</a>
                                        <div className="board_div">
                                            멋사 오버플로우
                                        </div>
                                        <a href="/board2">프론트엔드</a>
                                        <a href="/board1">백엔드</a>
                                        <a href="/board2">기획</a>
                                        <a href="/board1">디자인</a>
                                        <a href="/board2">기타</a>
                                    </span>
                                )}
                            </ul>
                        </nav>
                    </section>
                    {/* 사이드바를 닫기 위한 오버레이 */}
                    <aside onClick={handleChangeSideBar} />
                </OpenSideBar>
            )}
        </Container>
    );
}

export default SideBar;
