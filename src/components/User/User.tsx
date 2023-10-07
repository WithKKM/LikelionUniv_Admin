import React, { useState, useEffect } from 'react';
import { Container } from './UserStyle';

interface TableRow {
    name: string;
    major: string;
    semester: number;
    part: string;
    email: string;
    role: string;
}

const User: React.FC = () => {
    const [data, setData] = useState<TableRow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = async () => {
        setIsLoading(true); // 데이터 로딩 중 상태로 설정
        // API 호출 또는 데이터 가져오기 로직을 여기에 추가
        // 페이지 번호(pageNumber)를 이용하여 데이터를 가져오고,
        // 가져온 데이터를 data 상태에 추가
        // 예: const response = await fetch(`/api/getData?page=${pageNumber}`);
        // const newData = await response.json();

        // 더미 데이터를 사용하는 예제
        const dummyData: TableRow[] = Array.from({ length: 100 }, (_, i) => ({
            name: `이름${i + 1}`,
            major: `전공${i + 1}`,
            semester: i + 1,
            part: `파트${i + 1}`,
            email: `email${i + 1}@example.com`,
            role: `역할${i + 1}`,
        }));

        if (pageNumber < 4) {
            setData(prevData => [...prevData, ...dummyData]);
            setPageNumber(pageNumber + 1);
        } else {
            setHasMore(false); // 더 이상 데이터를 가져올 수 없으면 hasMore를 false로 설정
        }

        setIsLoading(false); // 데이터 로딩 완료 상태로 설정
    };

    const handleScroll = () => {
        if (!isLoading && hasMore) {
            const table = document.getElementById('infinite-scroll-table');
            if (
                table &&
                table.scrollTop + table.clientHeight >= table.scrollHeight - 100
            ) {
                fetchMoreData();
            }
        }
    };

    useEffect(() => {
        fetchMoreData(); // 페이지 로딩 시 데이터 초기 로드
        const table = document.getElementById('infinite-scroll-table');
        if (table) {
            table.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (table) {
                table.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div id="infinite-scroll-table">
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>전공</th>
                            <th>기수</th>
                            <th>파트</th>
                            <th>이메일</th>
                            <th>역할</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.major}</td>
                                <td>{item.semester}</td>
                                <td>{item.part}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button>수정</button>
                                </td>
                                <td>
                                    <button>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>

            {isLoading && <div>로딩 중...</div>}
        </div>
    );
};

export default User;
