const homeButton = document.querySelector('.home > img');
const editProfileButtton = document.querySelector('.edit > img');
const logoutButton = document.querySelector('.logout > img');
const userToken = localStorage.getItem("userToken");

// const url = "https://sheltered-citadel-84490.herokuapp.com";
const url = "http://localhost:8000";

// const frontendUrl = `https://webkirti-social-media-website.netlify.app`;
const frontendUrl = `http://localhost:5500`;

homeButton.addEventListener('click', () => {
    location.href = `${frontendUrl}/pages/dashboard/index.html}`;
});

logoutButton.addEventListener('click', () => {
    if (userToken) {
        fetch(`${url}/auth/logout`, {
                method: "POST",
                headers: {
                    authorization: userToken,
                },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    location.replace(`${frontendUrl}/index.html`);
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('profilePhoto');
    localStorage.removeItem('userId');
});

editProfileButtton.addEventListener('click', () => {
    location.href = "";
});