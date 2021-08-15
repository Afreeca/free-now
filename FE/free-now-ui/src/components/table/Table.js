import { Table as RsTable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import { company } from 'utils/constants';

const renderFreeNowTable = (items) => {
    return (
        <RsTable data={items} width={1000} height={400} align="center">
             <Column width={500} sortable fixed resizable align='left'>
                <HeaderCell>Model</HeaderCell>
                <Cell dataKey="model" />
            </Column>
            <Column width={250} sortable fixed resizable align='left'>
                <HeaderCell>Type</HeaderCell>
                <Cell dataKey="type" />
            </Column>
            <Column width={250} sortable resizable align='left'>
                <HeaderCell>State</HeaderCell>
                <Cell dataKey="state" />
            </Column>
        </RsTable>
    )
}

const renderSharedNowTable = (items) => {
    return (
        <RsTable data={items} width={1000} height={400} align="center">
            <Column width={150} sortable fixed align='left'>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
            </Column>

            <Column width={250} sortable  align='left'>
                <HeaderCell>Address</HeaderCell>
                <Cell dataKey="address" />
            </Column>
            <Column width={250} sortable  align='left'>
                <HeaderCell>Engine Type</HeaderCell>
                <Cell dataKey="engineType" />
            </Column>
            <Column width={250} sortable   align='left'>
                <HeaderCell>Exterior</HeaderCell>
                <Cell dataKey="exterior" />
            </Column>
            <Column width={250} sortable  align='left'>
                <HeaderCell>Interior</HeaderCell>
                <Cell dataKey="interior" />
            </Column>
            <Column width={100} sortable  align='left'>
                <HeaderCell>Fuel</HeaderCell>
                <Cell dataKey="fuel" />
            </Column>
        </RsTable> 
    )
}

const Table = ({type, items}) =>{
    return( 
        type===company.freeNow
        ?
            renderFreeNowTable(items)
        : 
            renderSharedNowTable(items)
    )
}

export {Table}