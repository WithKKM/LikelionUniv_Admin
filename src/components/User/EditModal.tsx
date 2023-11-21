import React, { useState, useEffect } from 'react';
import { EditModalStyle } from './EditModalStyle';
import { TableRow } from './User';

interface EditModalProps {
    initialData: Partial<TableRow>;
    onSave: (updatedData: Partial<TableRow>) => void;
    onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
    initialData,
    onSave,
    onCancel,
}) => {
    const [editedData, setEditedData] = useState(initialData);

    useEffect(() => {
        setEditedData(initialData);
    }, [initialData]);

    const handleSave = () => {
        onSave(editedData);
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleChange = (
        field: keyof TableRow,
        value: string | number | undefined,
    ) => {
        setEditedData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <EditModalStyle>
            <h2>회원 정보 수정</h2>
            <div className="BoxName">이름</div>
            <input
                className="InputBox"
                type="text"
                value={editedData.name || ''}
                onChange={e => handleChange('name', e.target.value)}
            />
            <div className="BoxName">전공</div>
            <input
                className="InputBox"
                type="text"
                value={editedData.major || ''}
                onChange={e => handleChange('major', e.target.value)}
            />
            <div className="BoxName">이메일</div>

            <input
                className="InputBox"
                type="text"
                value={editedData.email || ''}
                onChange={e => handleChange('email', e.target.value)}
            />

            <label>
                <div>기수 변경</div>
                <select
                    className="DropdownList"
                    value={editedData.semester || ''}
                    onChange={e =>
                        handleChange(
                            'semester',
                            parseInt(e.target.value, 10) || undefined,
                        )
                    }
                >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>
                            {`${num}기`}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                <div>역할 변경</div>
                <select
                    className="DropdownList"
                    value={editedData.role || ''}
                    onChange={e => handleChange('role', e.target.value)}
                >
                    <option value="대표">대표</option>
                    <option value="운영진">운영진</option>
                    <option value="아기사자">아기사자</option>
                </select>
            </label>
            <label>
                <div>트랙 변경</div>
                <select
                    className="DropdownList"
                    value={editedData.part || ''}
                    onChange={e => handleChange('part', e.target.value)}
                >
                    <option value="기획">기획</option>
                    <option value="디자인">디자인</option>
                    <option value="프론트엔드">프론트엔드</option>
                    <option value="백엔드">백엔드</option>
                </select>
            </label>
            <button className="Button" onClick={handleSave}>
                저장
            </button>
            <button onClick={handleCancel}>취소</button>
        </EditModalStyle>
    );
};

export default EditModal;
