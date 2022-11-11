export const fetchUserName = () => {
    const userName = localStorage.getItem('userName');
    return userName;
}

export const fetchFirstName = () => {
    const userFirstName = localStorage.getItem('firstName');
    return userFirstName;
}

export const fetchReception = () => {
    const userReception = localStorage.getItem('reception');
    return userReception;
}
