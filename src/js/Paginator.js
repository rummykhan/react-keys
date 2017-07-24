import students from './data/students';

class Paginator {

    constructor() {
        this.per_page = 3;
    }

    get(current_page) {
        current_page = current_page || 1;

        const offset = current_page > 1 ? ((current_page - 1) * this.per_page) : 0;

        return {
            current_page,
            data: students.slice((current_page - 1) * this.per_page, this.per_page),
            total: students.length,
            has_next_page: (Math.ceil(students.length / this.per_page) > current_page),
            has_previous_page: (current_page < Math.ceil(students.length / this.per_page)),

        };
    }
}

export default Paginator;