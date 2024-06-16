const friendfolios = [
    'https://www.tomconey.dev/',
    'https://www.trichardsphillips.com/resume/',
]

export default function returnRandomFriendfolio() {
    const randomIndex = Math.floor(Math.random() * friendfolios.length)
    return friendfolios[randomIndex]
}