import React, {FC} from 'react'
import { Select as SelectAnt } from 'antd';

interface SelectProps {
    items: any[],
    defaultValue: string
}

const Select: FC<SelectProps> = ({items, defaultValue}) => {
    return (
        <SelectAnt
            defaultValue={defaultValue}
            showSearch
            optionFilterProp="children"
        >
            <SelectAnt.Option value="" disabled>Не выбрано</SelectAnt.Option>
            {items.map(item =>
                <SelectAnt.Option key={item._id} value={item.code}>{item.name}</SelectAnt.Option>)
            }
        </SelectAnt>
    )
}

export default Select
