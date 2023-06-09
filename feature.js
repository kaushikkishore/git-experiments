function getName(firstname, lastname) {

    if (firstname && lastname) {
        return `${firstname} ${lastname}`;
    }

    if (firstname) {
        return firstname;
    }

    if (lastname) {
        return lastname;
    }

}

function getEmpCTC(salaryPerMonth) {

    if (typeof salaryPerMonth !== 'number') {
        throw new Error('Not a valid salary');
    }

    if (salaryPerMonth <= 0) {
        throw new Error('Please provide a salary more than 0.');
    }

    return salaryPerMonth * 12;
}