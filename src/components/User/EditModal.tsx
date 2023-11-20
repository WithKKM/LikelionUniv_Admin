import React, { useState, useEffect, useRef } from 'react';
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
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setEditedData(initialData);

        const handleOutsideClick = (e: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                onCancel();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [initialData, onCancel]);

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
        <EditModalStyle ref={modalRef}>
            <h2>회원 정보 수정</h2>
            <label>
                이름:
                <input
                    type="text"
                    value={editedData.name || ''}
                    onChange={e => handleChange('name', e.target.value)}
                />
            </label>
            <label>
                전공:
                <input
                    type="text"
                    value={editedData.major || ''}
                    onChange={e => handleChange('major', e.target.value)}
                />
            </label>
            <label>
                기수:
                <input
                    type="number"
                    value={editedData.semester || ''}
                    onChange={e =>
                        handleChange(
                            'semester',
                            parseInt(e.target.value, 10) || undefined,
                        )
                    }
                />
            </label>
            <label>
                파트:
                <input
                    type="text"
                    value={editedData.part || ''}
                    onChange={e => handleChange('part', e.target.value)}
                />
            </label>
            <label>
                이메일:
                <input
                    type="text"
                    value={editedData.email || ''}
                    onChange={e => handleChange('email', e.target.value)}
                />
            </label>
            <label>
                역할:
                <input
                    type="text"
                    value={editedData.role || ''}
                    onChange={e => handleChange('role', e.target.value)}
                />
            </label>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleCancel}>취소</button>
        </EditModalStyle>
    );
};

export default EditModal;
