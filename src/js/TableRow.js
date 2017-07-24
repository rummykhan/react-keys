import React, {Component} from 'react';

class TableRow extends Component {
    render() {
        const {student} = this.props;
        return (
            <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>Placeholder</td>
            </tr>
        )
    }
}

export default TableRow;