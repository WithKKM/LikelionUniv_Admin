import React, { useState, useEffect } from 'react';
import { Container } from './UserStyle';
import EditModal from './EditModal';
import { UserData, fetchDataFromApi } from './UserData';

export interface TableRow {
    name: string;
    major: string;
    semester: number;
    part: string;
    email: string;
    role: string;
}

const User: React.FC = () => {
    const [data, setData] = useState<TableRow[]>([]);
    //const [data, setData] = useState<UserData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const [editModalData, setEditModalData] = useState<Partial<TableRow>>({});

    const fetchMoreData = async () => {
        setIsLoading(true);

        /* try {
            const apiData: UserData[] = await fetchDataFromApi();
            if (apiData.length > 0) {
                setData(prevData => [...prevData, ...apiData]);
                setPageNumber(pageNumber + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }

        setIsLoading(false);
    }; */
        // 더미 데이터를 사용
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

    const handleDelete = (index: number) => {
        const shouldDelete = window.confirm('정말로 삭제하시겠습니까?');

        if (shouldDelete) {
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
        }
    };

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setEditModalData(data[index]);
    };

    const handleModalSave = (updatedData: Partial<TableRow>) => {
        const newData = [...data];
        newData[editIndex as number] = {
            ...data[editIndex as number],
            ...updatedData,
        };
        setData(newData);
        setEditIndex(null);
    };

    const handleModalCancel = () => {
        setEditIndex(null);
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
                                    <button onClick={() => handleEdit(index)}>
                                        수정
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>

            {isLoading && <div>로딩 중...</div>}

            {editIndex !== null && (
                <EditModal
                    initialData={editModalData}
                    onSave={handleModalSave}
                    onCancel={handleModalCancel}
                />
            )}
        </div>
    );
};

export default User;
