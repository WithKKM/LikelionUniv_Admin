import React, { useState, useEffect } from 'react';
import { Container } from './RecrutingStyle';

export interface TableRow {
    isChecked: boolean;
    name: string;
    number: string;
    email: string;
}

const Recruting: React.FC = () => {
    const [data, setData] = useState<TableRow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectAll, setSelectAll] = useState(false);

    const fetchMoreData = async () => {
        setIsLoading(true);

        // 더미 데이터를 사용
        const dummyData: TableRow[] = Array.from({ length: 100 }, (_, i) => ({
            isChecked: false,
            name: `이름${i + 1}`,
            number: `010-1234-567${i + 1}`,
            email: `email${i + 1}@example.com`,
        }));

        if (pageNumber < 4) {
            setData(prevData => [...prevData, ...dummyData]);
            setPageNumber(pageNumber + 1);
        } else {
            setHasMore(false);
        }

        setIsLoading(false);
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

    const handleCheckboxChange = (index: number) => {
        const newData = [...data];
        newData[index].isChecked = !newData[index].isChecked;
        setData(newData);
    };

    const handleSelectAll = () => {
        const newData = data.map(item => ({ ...item, isChecked: !selectAll }));
        setData(newData);
        setSelectAll(!selectAll);
    };

    const handleSendNotification = () => {
        // Implement the logic to send notifications here
        const selectedItems = data.filter(item => item.isChecked);
        console.log('Selected Items:', selectedItems);
    };

    useEffect(() => {
        fetchMoreData();
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
                <div>
                    <button onClick={handleSelectAll}>
                        {selectAll ? '전체 해제하기' : '전체 선택하기'}
                    </button>
                    <button onClick={handleSendNotification}>
                        알림 보내기
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>이름</th>
                            <th>번호</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={item.isChecked}
                                        onChange={() =>
                                            handleCheckboxChange(index)
                                        }
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.number}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>

            {isLoading && <div>로딩 중...</div>}
        </div>
    );
};

export default Recruting;
