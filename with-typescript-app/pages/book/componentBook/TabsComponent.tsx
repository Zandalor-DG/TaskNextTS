import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { BookStoreData } from '../../../../models/BookStore/bookStoreData';

interface PropsTabsComponent {
    description?: string;
    booksInfo?: BookStoreData;
}

const TabsComponent: React.FC<PropsTabsComponent> = ({ description, booksInfo }: PropsTabsComponent) => {
    const { TabPane } = Tabs;

    function callback(key: string | number | null | undefined) {
        console.log(key);
    }
    const yearOfBook = React.useMemo(() => {
        if (booksInfo?.theYearOfPublishing) {
            return new Date(booksInfo?.theYearOfPublishing).getFullYear();
        }
        return '';
    }, [booksInfo?.theYearOfPublishing]);
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Description" key="1">
                {description}
            </TabPane>
            <TabPane tab="info" key="2">
                <span>language: {booksInfo?.language}</span>
                <br />
                <span>The year of publish: {yearOfBook}</span>
                <br />
                <span>Number of page: {booksInfo?.numberOfPages}</span>
                <br />
                <h3>Price: {booksInfo?.price}</h3>
            </TabPane>
        </Tabs>
    );
};

export default TabsComponent;
