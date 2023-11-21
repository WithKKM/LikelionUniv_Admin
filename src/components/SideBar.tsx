import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import * as S from './SideBarStyle';

export function SideBar() {
    const [sideBar, setSideBar] = useState(false);
    const [showSubList, setShowSubList] = useState(false);

    function handleChangeSideBar() {
        setSideBar(prevState => !prevState);
        setShowSubList(false);
    }

    function handleToggleSubList() {
        setShowSubList(prevState => !prevState);
    }

    return (
        <S.Wrapper>
            {!sideBar ? (
                <S.ClosedSideBar>
                    <nav>
                        <button
                            className="SideBarButton"
                            onClick={handleChangeSideBar}
                        >
                            <AiOutlineMenu />
                        </button>
                    </nav>
                </S.ClosedSideBar>
            ) : (
                <S.OpenSideBar>
                    <section>
                        <nav>
                            <span>
                                <button
                                    className="SideBarButton"
                                    onClick={handleChangeSideBar}
                                >
                                    <AiOutlineMenu />
                                </button>
                            </span>
                            <ul>
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
                    <aside onClick={handleChangeSideBar} />
                </S.OpenSideBar>
            )}
        </S.Wrapper>
    );
}

export default SideBar;
