import data from '../data/courses';

class Course {
    getCourses(id) {
        return new Promise((resolve, reject) => {
            if (data[id]) {
                setTimeout(() => {
                    resolve({id, success: true, courses: data[id]});
                }, 2000);
            } else {
                setTimeout(() => {
                    reject({id, success: false, courses: []});
                }, 200);
            }
        });

    }
}

export default Course