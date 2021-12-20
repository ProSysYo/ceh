import { FC } from 'react';
import { Drawer } from "antd"
import SummaryInfo from './SummaryInfo';

const ShowOrder: FC<{onClose: () => void, visible: boolean}> = ({onClose, visible}) => {
    
    return (
        <Drawer title="Информация по заказу" placement="right" width="1400" onClose={onClose} visible={visible} destroyOnClose>
            <SummaryInfo />
        </Drawer>
    )
}

export default ShowOrder
