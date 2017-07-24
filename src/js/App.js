import React, {Component} from 'react';
import logo from '../css/logo.svg';
import '../css/App.css';
import Paginator from './Paginator';
import TableRow from './TableRow';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paginator: {
                data: []
            },
            loading: false,
        }
    }

    componentDidMount() {
        this.getStudents();
    }

    loading() {
        this.setState({loading: true});
    }

    loaded() {
        this.setState({loading: false});
    }

    getStudents(page) {

        if (page === 0) {
            return;
        }

        this.loading();
        setTimeout(() => {
            this.updateStudents((new Paginator()).get(page));
        }, 2000);
    }

    updateStudents(paginator) {
        this.setState({paginator});
        this.loaded();
    }

    renderPaginator() {
        const {paginator} = this.state;
        return (
            <div className="btn-group">
                <button className="btn btn-default" onClick={e => {
                    this.getStudents(paginator.has_previous_page ? (paginator.current_page - 1) : 0)
                }}>Previous
                </button>
                <button className="btn btn-default" onClick={e => {
                    this.getStudents(paginator.has_next_page ? (paginator.current_page + 1) : 0)
                }}>Next
                </button>
            </div>
        )
    }

    renderTableBody() {
        const {paginator} = this.state;
        return (
            <tbody>
            {paginator.data.map((student, index) => {
                return <TableRow student={student} key={student.id}/>
            })}
            </tbody>
        )
    }

    renderTableHead() {
        return (
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td>Courses</td>
            </tr>
            </thead>
        )
    }

    renderTable() {
        if (this.state.loading) {
            return (
                <h4>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw"/>
                </h4>
            )
        }
        return (
            <table className="table table-striped table-responsive">
                {this.renderTableHead()}
                {this.renderTableBody()}
            </table>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Keys Test
                            </div>
                            <div className="panel-body">
                                {this.renderTable()}
                            </div>
                            <div className="panel-footer">
                                {this.renderPaginator()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
