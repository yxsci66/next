import React from 'react';
import ReactDOM from 'react-dom';

import { TreeSelect } from '@alifd/next';
import type { TreeSelectProps } from '@alifd/next/lib/tree-select';

const treeData = [
    {
        label: 'Component',
        value: '1',
        children: [
            {
                label: 'Form',
                value: '2',
                children: [
                    {
                        label: 'Input',
                        value: '4',
                    },
                    {
                        label: 'Select',
                        value: '5',
                    },
                ],
            },
            {
                label: 'Display',
                value: '3',
                children: [
                    {
                        label: 'Table',
                        value: '6',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component {
    handleChange: TreeSelectProps['onChange'] = (value, data) => {
        console.log(value, data);
    };

    render() {
        return (
            <TreeSelect
                value={{ value: 'non-existent', label: 'not exist' }}
                preserveNonExistentValue
                treeDefaultExpandAll
                treeCheckable
                dataSource={treeData}
                onChange={this.handleChange}
                style={{ width: 200 }}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
