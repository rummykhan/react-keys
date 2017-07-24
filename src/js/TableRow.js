import React, {Component} from 'react';
import CourseService from './service/courses';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        this.getCourses(this.props.student.id);
    }

    getCourses(id) {
        (new CourseService()).getCourses(id)
            .then(response => {
                console.log('response', response);
                this.updateCourses(response.courses);
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    updateCourses(courses) {
        this.setState({courses});
    }

    renderCourses() {
        if (this.state.courses.length === 0) {
            return (
                <td>
                    <i className="fa fa-spinner fa-spin"/>
                </td>
            )
        }

        return (
            <td>
                {this.state.courses.join(',')}
            </td>
        )
    }

    render() {
        const {student} = this.props;
        return (
            <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                {this.renderCourses()}
            </tr>
        )
    }
}

export default TableRow;