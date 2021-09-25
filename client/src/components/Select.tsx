import React, {FC} from 'react'
import { Select as SelectAnt } from 'antd';

interface SelectProps {
    items: any[];
    value: string | number;
    disabled?: boolean;
    
    onChange?: (value: any, e: any) => void;   
}

const Select: FC<SelectProps> = ({items, value, onChange, disabled = false}) => {
    return (
        <SelectAnt
            value={value}
            showSearch
            optionFilterProp="children"
            disabled={disabled}            
            onChange={onChange}              
        >
            <SelectAnt.Option value="" disabled>не выбрано</SelectAnt.Option>
            {items.map((item, index) => 
                <SelectAnt.Option 
                key={item._id ? item._id : index} 
                value={item.value ? item.value : item}
                >
                    {item.name ? item.name : item}
                </SelectAnt.Option>)
            }
        </SelectAnt>
    )
}

export default Select
